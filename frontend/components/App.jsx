import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SignUpFormContainer from '../components/session_form/sign_up_form_container';
import LogInFormContainer from '../components/session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from "./nav_bar/nav_bar_container";
import SplashContainer from "./splash/splash_container";
import HomeContainer from "./home/home_container";
import VideoContainer from "./video/video_container";
import SearchContainer from "./search/search_container";
import WatchlistContainer from "./watchlist/watchlist_container";
import TagContainer from "./tag/tag_container";

const App = () => (
  <div>
    <div className="app-background"></div>

    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <div className="app-container">
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/home" component={HomeContainer} />
        <ProtectedRoute path="/videos/:id" component={VideoContainer} />
        <ProtectedRoute path="/search" component={SearchContainer} />
        <ProtectedRoute path="/watchlist" component={WatchlistContainer} />
        <ProtectedRoute path="/tags/:id" component={TagContainer} />
      </div>
    </Switch>
  </div>
);


export default App;
