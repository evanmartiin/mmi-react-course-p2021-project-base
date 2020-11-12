import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css'
// import SpotifyProvider from 'components/SpotifyProvider';
import Home from 'pages/Home'
import Search from 'pages/Search'
import Profile from 'pages/Profile'
import Player from 'pages/Player'
import Login from 'pages/Login'
import Signup from 'pages/Signup'
import Form from 'pages/Form'
import Hibernation from 'pages/Hibernation'
import Alarm from 'pages/Alarm'
import Download from 'pages/Download'
import Playlist from 'pages/Playlist'
import Timer from 'pages/Timer'
import Entrance from 'pages/Entrance'
import Artist from 'pages/Artist'
import Settings from 'pages/Settings'

// const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
// const spotifyRedirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI

function App() {
  return (
    // <SpotifyProvider clientId={spotifyClientId} spotifyRedirectUri={spotifyRedirectUri}>
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
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/hibernation">
            <Hibernation />
          </Route>
          <Route path="/alarm">
            <Alarm />
          </Route>
          <Route path="/download">
            <Download />
          </Route>
          <Route path="/playlist">
            <Playlist />
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
          <Route path="/entrance">
            <Entrance />
          </Route>
          <Route path="/artist">
            <Artist />
          </Route>
        <Route path="/settings">
          <Settings />
        </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    // </SpotifyProvider>
  );
}

export default App
