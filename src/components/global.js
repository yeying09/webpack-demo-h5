import Vue from 'vue';

import Cell from './cell'
import TopBar from './topBar'

import SvgBack from './svg/Back'

const components = {
  // custom
  Cell,
  TopBar,
  // svg
  SvgBack
}

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});
