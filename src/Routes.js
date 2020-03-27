
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainLanding from './Pages/MainLanding';
import RegistrationForm from './Pages/RegistrationForm';
import Login from './Pages/Login';
import Header from './Components/Header';
import SupplyMarketPlace from './Pages/SupplyMarketplace';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainLanding} />
      <Route exact path="/search" component={SupplyMarketPlace} />
      <Route exact path="/register" component={RegistrationForm} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
}

export default Routes;
