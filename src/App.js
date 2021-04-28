import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Container, Menu, PageBody } from './AppStyled';
import PrivateRoute from './components/PrivateRoute';
import HomeScreen from './pages/HomeScreen';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';

export default () => (
  <HashRouter>
    <Container>
      <Menu>
        <MenuItem icon="/assets/store.png" link="/" />
        <MenuItem icon="/assets/order.png" link="/orders" />
        <MenuItem icon="/assets/profile.png" link="/profile" />
      </Menu>
      <PageBody>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <PrivateRoute exact path="/orders">
            <div>Tela de pedidos</div>
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <div>Tela de perfil</div>
          </PrivateRoute>
        </Switch>
      </PageBody>
      <Cart />
    </Container>
  </HashRouter>
);
