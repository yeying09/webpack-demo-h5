import Vue from 'vue';

import Cell from './custom/cell'
import TopBar from './custom/topBar'
import NavBar from './custom/navBar'
import TabBarItem from './custom/tabBarItem'
import Picker from './custom/picker'

import SvgBack from './svg/Back'

const components = {
  // custom
  Cell,
  TopBar,
  NavBar,
  TabBarItem,
  Picker,
  // svg
  SvgBack
}

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});
