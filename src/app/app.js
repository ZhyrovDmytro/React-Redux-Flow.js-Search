import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */

import 'svgxuse';
import init from './init';
import configureStore from './store/configureStore';
import factory from './factory';
import { render, renderFactory } from './render';
import Search from './components/Search';

const app = (container, config) => {
    const store = configureStore(config);
    render(Search, document.querySelector('.root'), {}, store);
};

app(window.config);
