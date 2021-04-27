import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

export default () => {
  const name = useSelector((state) => state.user.name);

  return (
    <HashRouter>
      <h1>
        Oi,
        {' '}
        {name}
      </h1>

      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/tela2/:nome">
          <Tela2Screen />
        </Route>
      </Switch>
    </HashRouter>
  );
};
