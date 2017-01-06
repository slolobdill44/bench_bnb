import React from 'react';
import ReactDom from 'react-dom';
import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDom.render(<h1>Welcome to BenchBnb</h1>, root);
});
