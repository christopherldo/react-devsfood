import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';

import { Container, Menu, PageBody } from './AppStyled';
import PrivateRoute from './components/PrivateRoute';
import HomeScreen from './pages/HomeScreen';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';

export default () => {
  const name = useSelector((state) => state.user.name);

  return (
    <HashRouter>
      <Container>
        <Menu>
          <MenuItem title="Loja" icon="/assets/store.png" link="/" />
          <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
          <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile" />
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
        <ReactTooltip id="tip-top" place="top" effect="solid" />
        <ReactTooltip id="tip-right" place="right" effect="solid" />
      </Container>
    </HashRouter>
  );
};
