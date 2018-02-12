import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase'



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBzGcaPx2uvbi30sbFowUIenmmBSeKN8KE",
    authDomain: "planapp-372b1.firebaseapp.com",
    databaseURL: "https://planapp-372b1.firebaseio.com",
    projectId: "planapp-372b1",
    storageBucket: "planapp-372b1.appspot.com",
    messagingSenderId: "183415027394"
  };
  firebase.initializeApp(config);


ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root')
);
