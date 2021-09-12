import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from 'react-router-dom';

// import Amplify from "aws-amplify";
// import {AmplifyAuthenticator, AmplifyGreetings, AmplifySignIn, AmplifySignUp} from "@aws-amplify/ui-react";
// import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";
// import awsconfig from "./aws-exports";

// Import Resume Builder
import ResumeBuilder from './components/ResumeBuilder'

// Added Pages
import Welcome from './pages/Welcome';
import Products from './pages/Products'
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

// Try Bootstrap now
import NavigationBar from "./screens/navigationBar/NavigationBar";
import Portfolio from "./screens/portfolio/Portfolio";


function App() {

  return (
    <div>
      {/* <MainHeader /> */}
      <NavigationBar />
      <Portfolio />
      
      {/* <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"/>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/app">
          <ResumeBuilder/>
          </Route>
          <Route path="*">
            <Redirect to='/' />
          </Route>
        </Switch>
      </main> */}
    </div>
  );

}

export default App;