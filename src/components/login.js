import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import Paper from 'material-ui/Paper';
import { RaisedButton, TextField } from 'material-ui';
import * as firebase from 'firebase'


const style = {
  height: 300,
  width: 300,
  margin: "20px 0px 20px 0px",
  textAlign: 'center',
  display: 'inline-block',
};
const style1 = {
   color: "rgb(0, 188, 212)",
  
};
const style2 = {
   color: "white",
  
};

class Login extends Component {
  constructor(props) {
    super(props)//for using 'this.'
    this.login = this.login.bind(this)

        
      this.state = {
         value: "Create"
      }
   
  }
  
  login(ev) {
    ev.preventDefault();
    const email = this.refs.txte.getValue();
    const pass = this.refs.pass.getValue();
    
    firebase.auth().signInWithEmailAndPassword(email, pass).then((result) => {
      browserHistory.push("/Start");
      console.log('login Succes')
    }).catch((err) => {
      if (err) {
        alert(err)
        this.refs.txte.focus()
        // browserHistory.push("/Signup")
      }
    });
  }
  render() {
    return (
      <div>
      
        <center>
          <Paper style={style} zDepth={3} >
            <h1 style={style1}>Login</h1>
            <TextField type="email" hintText="UserEmail" floatingLabelText="Email" ref="txte" /> <br />
            <TextField type="password" hintText="Password" floatingLabelText="Password" ref="pass" /> <br />
            <br /><RaisedButton onClick={this.login} primary={true}><span style={style2}> Login </span></RaisedButton><br />
          </Paper>
        </center>
         
      </div>
    )
  }
}

export default Login;  