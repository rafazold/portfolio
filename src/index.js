import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import TagManager from 'react-gtm-module';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const tagManagerArgs = {
    gtmId: 'GTM-TXV9CWK',
}

TagManager.initialize(tagManagerArgs)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
