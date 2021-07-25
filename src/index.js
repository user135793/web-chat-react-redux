import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store/store';

const firebaseConfig = {
  apiKey: "AIzaSyBWYMb19_2_nu8KH07k-D-dsdOG-4GELdE",
  authDomain: "web-messenger-f7c9a.firebaseapp.com",
  projectId: "web-messenger-f7c9a",
  storageBucket: "web-messenger-f7c9a.appspot.com",
  messagingSenderId: "710894227109",
  appId: "1:710894227109:web:08fb0b149cc282a921874c",
  measurementId: "G-0BYDXMTCV3"
};

firebase.initializeApp(firebaseConfig);
window.store = store;
ReactDOM.render(
  
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();