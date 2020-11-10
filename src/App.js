import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css'
import Home from 'pages/Home'
import Search from 'pages/Search'
import Profile from 'pages/Profile'
import Player from 'pages/Player'
import Login from 'pages/Login'
import Signup from 'pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/player">
          <Player />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App
