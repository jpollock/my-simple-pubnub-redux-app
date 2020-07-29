import { configureStore } from '@reduxjs/toolkit';
import { createMessageReducer, createPresenceReducer  } from 'pubnub-redux';

const reducer = {
  messages: createMessageReducer(),
  onlineUsers: createPresenceReducer()
};

const middleware = {}

export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production'
});