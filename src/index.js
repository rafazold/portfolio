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
serviceWorker.unregister();
