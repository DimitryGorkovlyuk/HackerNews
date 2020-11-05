import React from 'react';
import { Provider } from 'react-redux';

import { Header } from './components';
import { StoriesList } from './stories';
import { store } from './store';
import { Loader } from './shared';

export function App() {
  return (
    <Provider store={store}>
      <Header />
      <StoriesList />
      <Loader />
    </Provider>
  );
}
