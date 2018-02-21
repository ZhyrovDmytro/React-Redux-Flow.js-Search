import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */

import Masonry from 'masonry-layout';
import 'svgxuse';
import init from './init';
import factory from './factory';
import { render, renderFactory } from './render';
import Search from './components/Search';

const app = (config) => {
    render(Search, document.querySelector('.root'));
};

app(window.config);
