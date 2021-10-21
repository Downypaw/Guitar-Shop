import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPageScreen from '../main-page/main-page';

const CartScreen = React.lazy(() => import('../cart/cart'));

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
      </Switch>
    </BrowserRouter>
  );
}
