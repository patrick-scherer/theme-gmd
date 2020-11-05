import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import noop from 'lodash/noop';
import { withNavigation, bin2hex } from '@shopgate/engage/core';
import { Swiper, Portal } from '@shopgate/engage/components';
import {
  PRODUCT_IMAGE,
  PRODUCT_IMAGE_AFTER,
  PRODUCT_IMAGE_BEFORE,
  loadProductImage,
  ITEM_PATH,
  ProductImage,
  getProductImageSettings,
} from '@shopgate/engage/product';
import MediaSection from '../MediaSection';
import connect from './connector';

/**
 * The product image slider component.
 * @param {number} currentSlide The index of the current visible slide.
 * @deprecated since catalog 2.0
 */
class ProductImageSlider extends Component {
  static propTypes = {
    'aria-hidden': PropTypes.bool,
    className: PropTypes.string,
    historyPush: PropTypes.func,
    images: PropTypes.arrayOf(PropTypes.string),
    product: PropTypes.shape(),
    productId: PropTypes.string,
  };

  static defaultProps = {
    'aria-hidden': null,
    className: null,
    historyPush: noop,
    images: null,
    product: null,
    productId: null,
  };

  /**
   *
   * @inheritDoc
   */
  constructor(props, context) {
    super(props, context);
    this.mediaRef = React.createRef(null);
  }

  /**
   * @inheritDoc
   */
  componentDidMount() {
    this.mounted = true;
  }

  /**
   * @param {Object} nextProps the next props
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps) {
    let depImage = null;

    if (!nextProps.images) {
      // Is loading, blur media
      if (this.mediaRef.current) {
        this.mediaRef.current.style.filter = 'blur(4px)';
      }
    }

    if (nextProps.images) {
      if (!nextProps.images.length && nextProps.product) {
        depImage = nextProps.product.featuredImageBaseUrl;
      } else if (!isEqual(this.props.images, nextProps.images)) {
        [depImage] = nextProps.images;
      }
    }

    if (depImage) {
      // Blur for image load
      if (this.mediaRef.current) {
        this.mediaRef.current.style.filter = 'blur(4px)';
      }
      loadProductImage(depImage).then(() => {
        if (this.mounted) {
          this.forceUpdate();
          if (this.mediaRef.current) {
            setTimeout(() => {
              if (this.mounted) {
                this.mediaRef.current.style.filter = 'none';
              }
            }, 500);
          }
        }
      });
    }

    return false;
  }

  /**
   * @inheritDoc
   */
  componentWillUnmount() {
    this.mounted = false;
  }

  handleOpenGallery = () => {
    this.props.historyPush({
      pathname: `${ITEM_PATH}/${bin2hex(this.props.product.id)}/gallery/${this.currentSlide}`,
    });
  };

  handleSlideChange = (currentSlide) => {
    this.currentSlide = currentSlide;
  };

  currentSlide = 0;

  /**
   * Renders the product image slider component.
   * @returns {JSX}
   */
  render() {
    const {
      product, productId, images, 'aria-hidden': ariaHidden, className,
    } = this.props;
    const { HeroImage: pdpResolutions } = getProductImageSettings();

    let content;
    if (images && images.length > 1) {
      content = (
        <Swiper
          loop
          indicators
          onSlideChange={this.handleSlideChange}
          className={className}
        >
          {images.map(image => (
            <Swiper.Item key={`${productId}-${image}`}>
              <ProductImage
                src={image}
                animating={false}
                resolutions={pdpResolutions}
                noBackground
              />
            </Swiper.Item>
          ))}
        </Swiper>
      );
    }

    let onClick = this.handleOpenGallery;

    if (!content) {
      content = (
        <ProductImage
          src={product ? product.featuredImageBaseUrl : null}
          className={className}
          forcePlaceholder={!product}
          resolutions={pdpResolutions}
          noBackground
        />
      );
      if (!product || !product.featuredImageBaseUrl) {
        onClick = noop;
      }
    }

    return (
      <Fragment>
        <Portal name={PRODUCT_IMAGE_BEFORE} />
        <Portal name={PRODUCT_IMAGE}>
          <MediaSection
            product={product}
            aria-hidden={ariaHidden}
            onClick={onClick}
            onRef={this.mediaRef}
          >
            {content}
          </MediaSection>
        </Portal>
        <Portal name={PRODUCT_IMAGE_AFTER} />
      </Fragment>
    );
  }
}

export default withNavigation(connect(ProductImageSlider));
