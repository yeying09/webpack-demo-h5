import Vue from 'vue';

import Cell from './custom/cell'
import TopBar from './custom/topBar'
import TabBar from './custom/tabBar'

import SvgBack from './svg/Back'

const components = {
  // custom
  Cell,
  TopBar,
  TabBar,
  // svg
  SvgBack
}

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});
