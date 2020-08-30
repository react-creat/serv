import React from 'react';
import Header from './components/Header/header';
import Home from './pages/home';
import { Route } from 'react-router-dom';
import cart from './pages/cart';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import pizzasAction from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    Axios.get('http://localhost:8080/pizzas').then(({ data }) => {
      dispatch(pizzasAction(data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {<Route exact path="/" component={Home} />}
        <Route exact path="/cart" component={cart} />
      </div>
    </div>
  );
}

export default App;
