import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Container, Menu, PageBody } from './AppStyled';
import HomeScreen from './pages/HomeScreen';
import MenuItem from './components/MenuItem';

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
        </Switch>
      </PageBody>
      {/* <Cart /> */}
    </Container>
  </HashRouter>
);
