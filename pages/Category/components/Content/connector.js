import { connect } from 'react-redux';
import {
  getChildCategoriesById,
  getCategoryProductCount,
} from '@shopgate/pwa-common-commerce/category/selectors';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props The component props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, props) => ({
  categories: getChildCategoriesById(state, props),
  hasProducts: getCategoryProductCount(state, props),
});

export default connect(mapStateToProps);
