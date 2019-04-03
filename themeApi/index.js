import AppBar from 'Components/AppBar/presets/BackBar';
import Drawer from 'Components/Drawer';
import ProductSlider from 'Components/ProductSlider';
import View from 'Components/View';
import { ProductContext } from '../pages/Product/context';
import { TextOption, SelectOption, PriceDifference } from '../pages/Product/components/Options';
import ProductCard from './ProductCard';

export default {
  AppBar,
  Drawer,
  ProductSlider,
  ProductCard,
  View,
  TextOption,
  SelectOption,
  PriceDifference,
  contexts: {
    ProductContext,
  },
};
