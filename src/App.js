import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
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
        </Switch>
      </Router>
    </div>
  );
}


export default App;
