import Vue from 'vue';

import Cell from './cell'

const components = {
  Cell
}

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});
