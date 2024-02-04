import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import Credit from './credit';
import Savings from './savings';
import Budget from './budget';
import Register from './register';
import Login from './login';
import CreditForm from './credit-form';
import AccountForm from './account-form';
import ExpenseForm from './expense-form';
import Logout from './logout';
import "./style.css";

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Route exact path='/'>
      <Home />
    </Route>
    <Route exact path='/credit'>
      <Credit />
    </Route>
    <Route exact path='/savings'>
      <Savings />
    </Route>
    <Route exact path='/budget'>
      <Budget />
    </Route>
    <Route exact path='/register'>
      <Register />
    </Route>
    <Route exact path='/login'>
      <Login />
    </Route>
    <Route exact path='/credit-form'>
      <CreditForm />
    </Route>
    <Route exact path='/account-form'>
      <AccountForm />
    </Route>
    <Route exact path='/expense-form'>
      <ExpenseForm />
    </Route>
    <Route exact path='/logout'>
      <Logout />
    </Route>
  </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);