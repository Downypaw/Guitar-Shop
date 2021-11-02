import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPageScreen from '../main-page/main-page';

const CartScreen = React.lazy(() => import('../cart/cart'));
const BlankPageScreen = React.lazy(() => import('../blank-page/blank-page'));

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPageScreen />
        </Route>
        <Route exact path='/cart'>
          <CartScreen />
        </Route>
        <Route exact path='/blank'>
          <BlankPageScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
