import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css'
import Home from 'pages/Home'
import Search from 'pages/Search'
import Profile from 'pages/Profile'
import Header from "components/Header/Header.js"

function App() {
  return (
    <BrowserRouter>
      <Header />
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
