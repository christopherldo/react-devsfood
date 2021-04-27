import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Container, Menu, PageBody } from './AppStyled';
import HomeScreen from './pages/HomeScreen';

export default () => (
  <HashRouter>
    <Container>
      <Menu />
      <PageBody>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </PageBody>
      {/* <Cart /> */}
    </Container>
  </HashRouter>
);
