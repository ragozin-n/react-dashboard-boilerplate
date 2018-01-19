import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import Dashboard from "./components/pages/DashboardPage";
import UserRoute from "./components/routes/UserRoute";

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <UserRoute path="/dashboard" exact component={Dashboard} />
  </div>
);
export default App;
