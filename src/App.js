import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Redux/Store';

import Header from './Components/Header';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <>
          <Header />
          <Routes />
        </>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
