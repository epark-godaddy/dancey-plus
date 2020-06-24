
import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Splash from './splash/splash'
import SignUpFormContainer from '../components/session_form/sign_up_form_container';
import LogInFormContainer from '../components/session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import 'bootstrap/dist/css/bootstrap.min.css';
import SplashContainer from "./splash/splash_container";
import './app.scss'
import HomeContainer from "./home/home_container";

const App = () => (
  <div>
    <div className="app-background"></div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/home" component={HomeContainer} />
    </Switch>
  </div>
);

export default App;