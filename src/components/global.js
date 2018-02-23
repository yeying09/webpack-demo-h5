import Vue from 'vue';

import Cell from './cell'
import TopBar from './topBar'

const components = {
  Cell,
  TopBar
}

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});
