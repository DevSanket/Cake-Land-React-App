import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import AllTransactions from './Components/AllOrders/All_Transaction';
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/header';
import ProductAdd from './Components/ProductAdd/ProductAdd';
import ProductDelete from './Components/ProductDelete/ProductDelete';
import ProductUpdate from './Components/ProductUpdate/ProductUpdate';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Cards} />
          <Route path="/addItem" component={ProductAdd} />
          <Route path="/removeItem" component={ProductDelete}/>
          <Route path="/alltransaction" component={AllTransactions} />
          <Route path="/updateItem" component={ProductUpdate} />
        </Switch>
      </div>

      
     );
  }
}
 
export default App;