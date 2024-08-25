import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import UserContext from './context';
import axios from 'axios';
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
import "./style.css";
const local = require("localStorage");
const URL = process.env.REACT_APP_URL;
let resp;



const App = () => {
  const [user, setUser] = useState(null);
  const UserData = () => {
    useEffect(() => {
      async function getUser() {
        const value = local.getItem("token")
        if (value != null) {
          resp = await axios.get(`${URL}/`, { headers: { token: value } });
          setUser(resp.data);
        }
      }
      getUser();
    }, []);
    return user;
  }
  UserData()
  return(
  <UserContext.Provider value={{user,setUser}}>
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
    </BrowserRouter>
  </UserContext.Provider >
)}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);