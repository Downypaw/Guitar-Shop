import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPageScreen from '../main-page/main-page';
import CartScreen from '../cart/cart';

export default function App({guitars}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPageScreen guitars={guitars}/>
        </Route>
        <Route exact path='/cart'>
          <CartScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
