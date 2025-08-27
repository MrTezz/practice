import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
    <Router>
        <Navbar homeText="Go To Base" aboutText="Contact"/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/wordnest'>
          <Textform/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
