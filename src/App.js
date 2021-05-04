import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/Shop/Shop';
import SignInAndSignUp from './Pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
