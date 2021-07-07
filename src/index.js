import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';
import './index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/animate.css/animate.min.css'

ReactDOM.render(
    <div className="container p-5">
      <GifExpertApp />
    </div>,
  document.getElementById('root')
);