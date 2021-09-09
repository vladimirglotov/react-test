import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Registration } from './components/Registration'
import { Success } from './components/Success';
import { Recovery } from './components/Recovery';
import { Confirm } from './components/Confirm'; 
import { DidNotCome } from './components/DidNotCome';
import { LoginSuccess } from "./components/LoginSuccess";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Switch>
              <Route component={Login} path="/" exact />
              <Route component={Registration} path="/registration" />
              <Route component={Confirm} path="/confirm" />
              <Route component={Recovery} path="/recovery" />
              <Route component={DidNotCome} path="/didnotcome" />
              <Route component={Success} path="/success" />
              <Route component={LoginSuccess} path="/content" />
              <Redirect to="/" />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
