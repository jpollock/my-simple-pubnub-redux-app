import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';
import './index.css';

// Add these imports - Step 1
import { Provider } from 'react-redux';
import { store } from './store';

import { createPubNubListener} from 'pubnub-redux';
import PubNub from 'pubnub'


let pubnub = new PubNub({
  publishKey: "<your key>",
  subscribeKey: "<your key>"
});


pubnub.addListener(createPubNubListener(store.dispatch));

const CHANNEL = 'your_channel';
pubnub.subscribe({channels: [CHANNEL], withPresence: true});


// Wrap existing app in Provider - Step 2
ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('root')
);
