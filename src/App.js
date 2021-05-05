import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/Shop/Shop';
import SignInAndSignUp from './Pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up';
import React, { Component } from 'react';
import { auth } from './Firebase/firebase.util';
import Header from './Components/Header/Header';

class App extends Component {
  constructor(){
    super();
    this.state ={
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() { 
    return ( 
      
      <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route path="/signin" component={SignInAndSignUp}/>
          </Switch>
      </div>
      
     );
  }
}
 
export default App;