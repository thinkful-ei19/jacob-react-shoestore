import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShoeStore from './components/shoe-store';
import Shoes from './shoes.json';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ShoeStore shoes={Shoes} />, document.getElementById('root'));
registerServiceWorker();
