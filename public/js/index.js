/* eslint-disable */
import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login, logout } from './login.js';

// DOM Elements
const mapBox = document.getElementById('map');
const loginFrom = document.querySelector('.form');
const logOutBtn = document.querySelector('.nav__el--logout');
//VALUES

//DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations); //lấy phần tử id="map", phân tích chuỗi Json

  displayMap(locations);
}

if (loginFrom)
  loginFrom.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener('click', logout);
