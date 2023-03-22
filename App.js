import NavBar from './navbar';
import {Route, HashRouter} from 'react-router-dom';
import Home from './components/home';
import CreateAccount from './components/createaccount';
import Login from './components/login';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import AllData from './components/alldata';
import Balance from './components/balance';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
   <HashRouter>
    <div className="container-fluid">
    <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/CreateAccount/" component={CreateAccount} />
      <Route path="/login/" component={Login} />
      <Route path="/deposit/" component={Deposit}/>
      <Route path="/withdraw/" component={Withdraw} />
      <Route path="/balance/" component={Balance} />
      <Route path="/alldata/" component={AllData} />
    </div>
   </HashRouter>
  );
}

export default App;
