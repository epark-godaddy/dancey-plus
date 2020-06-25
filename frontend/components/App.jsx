import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Splash from './splash/splash';
import SignUpFormContainer from '../components/session_form/sign_up_form_container';
import LogInFormContainer from '../components/session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from "./nav_bar/nav_bar_container";
import SplashContainer from "./splash/splash_container";
import HomeContainer from "./home/home_container";
import SearchContainer from "./search/search_container";
import WatchlistContainer from "./watchlist/watchlist_container";

const App = () => (
  <div>
    <div className="app-background"></div>

    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/home" component={HomeContainer} />
      <ProtectedRoute path="/search" component={SearchContainer} />
      <ProtectedRoute path="/watchlist" component={WatchlistContainer} />
    </Switch>
  </div>
);


export default App;
