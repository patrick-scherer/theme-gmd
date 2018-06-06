import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Portal from '@shopgate/pwa-common/components/Portal';
import * as portals from '@shopgate/pwa-common-commerce/product/constants/Portals';
// Import Reviews from 'Components/Reviews';
import TaxDisclaimer from '@shopgate/pwa-ui-shared/TaxDisclaimer';
// Import ImageSlider from './components/ImageSlider';
import Header from '../Header';
// Import VariantSelects from './components/VariantSelects';
// Import Options from './components/Options';
import Description from '../Description';
// Import Properties from './components/Properties';
import connect from './connector';
import ProductContext from '../../context';

/**
 * The product content component.
 */
class ProductContent extends Component {
  static propTypes = {
    baseProductId: PropTypes.string,
    isBaseProduct: PropTypes.bool,
    productId: PropTypes.string,
    variantId: PropTypes.string,
  };

  static defaultProps = {
    baseProductId: null,
    isBaseProduct: null,
    productId: null,
    variantId: null,
  };

  /**
   * @param {Object} props The component props.
   */
  constructor(props) {
    super(props);

    this.state = {
      productId: props.isBaseProduct === true ? props.productId : null,
      variantId: props.isBaseProduct === false ? props.productId : null,
    };
  }

  /**
   * @param {Object} nextProps The next component props.
   */
  componentWillReceiveProps(nextProps) {
    const isBaseProduct = (nextProps.isBaseProduct === true);

    this.setState({
      productId: (isBaseProduct) ? this.props.productId : nextProps.baseProductId,
      variantId: (isBaseProduct) ? null : this.props.productId,
    });
  }

  /**
   * @param {Object} nextProps The next component props.
   * @param {Object} nextState The next state.
   * @return {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.productId !== nextProps.productId
      || this.state.productId !== nextState.productId
      || this.state.variantId !== nextState.variantId
    );
  }

  /**
   * @return {JSX}
   */
  render() {
    if (!this.state.productId && !this.state.variantId) {
      return null;
    }

    return (
      <ProductContext.Provider value={this.state}>
        <Fragment>
          {/* IMAGE */}
          {/* <Portal name={portals.PRODUCT_IMAGE_BEFORE} />
          <Portal name={portals.PRODUCT_IMAGE}>
            <ImageSlider />
          </Portal>
          <Portal name={portals.PRODUCT_IMAGE_AFTER} /> */}

          {/* HEADER */}
          <Portal name={portals.PRODUCT_HEADER_BEFORE} />
          <Portal name={portals.PRODUCT_HEADER}>
            <Header productId={this.props.productId} />
          </Portal>
          <Portal name={portals.PRODUCT_HEADER_AFTER} />

          {/* VARIANT SELECT */}
          {/* <Portal name={portals.PRODUCT_VARIANT_SELECT_BEFORE} />
          <Portal name={portals.PRODUCT_VARIANT_SELECT}>
            <VariantSelects />
          </Portal>
          <Portal name={portals.PRODUCT_VARIANT_SELECT_AFTER} /> */}

          {/* OPTIONS */}
          {/* <Portal name={portals.PRODUCT_OPTIONS_BEFORE} />
          <Portal name={portals.PRODUCT_OPTIONS}>
            <Options />
          </Portal>
          <Portal name={portals.PRODUCT_OPTIONS_AFTER} /> */}

          {/* DESCRIPTION */}
          <Portal name={portals.PRODUCT_DESCRIPTION_BEFORE} />
          <Portal name={portals.PRODUCT_DESCRIPTION}>
            <Description productId={this.props.productId} />
          </Portal>
          <Portal name={portals.PRODUCT_DESCRIPTION_AFTER} />

          {/* PROPERTIES */}
          {/* <Portal name={portals.PRODUCT_PROPERTIES_BEFORE} />
          <Portal name={portals.PRODUCT_PROPERTIES}>
            <Properties />
          </Portal>
          <Portal name={portals.PRODUCT_PROPERTIES_AFTER} /> */}

          {/* REVIEWS */}
          {/* <Portal name={portals.PRODUCT_REVIEWS_BEFORE} />
          <Portal name={portals.PRODUCT_REVIEWS}>
            <Reviews />
          </Portal>
          <Portal name={portals.PRODUCT_REVIEWS_AFTER} /> */}

          {/* TAX DISCLAIMER */}
          <Portal name={portals.PRODUCT_TAX_DISCLAIMER_BEFORE} />
          <Portal name={portals.PRODUCT_TAX_DISCLAIMER}>
            <TaxDisclaimer />
          </Portal>
          <Portal name={portals.PRODUCT_TAX_DISCLAIMER_AFTER} />
        </Fragment>
      </ProductContext.Provider>
    );
  }
}

export default connect(ProductContent);
