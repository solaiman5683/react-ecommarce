import { createContext, useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';

export const MyContext = createContext();

function App() {
  const [cartQuantity, setCartQuantity] = useState([]);
  return (
    <MyContext.Provider value={[ cartQuantity, setCartQuantity ]}>
      <div>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <Route path="/place-order">
              <PlaceOrder></PlaceOrder>
            </Route>
          </Switch>
        </Router>
      </div>
    </MyContext.Provider>
  );
}


export default App;
