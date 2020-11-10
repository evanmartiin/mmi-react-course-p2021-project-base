import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css'
import Home from 'pages/Home'
import Search from 'pages/Search'
import Profile from 'pages/Profile'

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
      </Switch>
    </BrowserRouter>
  );
}

export default App
