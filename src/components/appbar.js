import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';

const style ={
  background:"#36ABCB"
}
class Bar extends Component {
    constructor(props) {
      super(props);
        
      this.state = {
         value: "Signup",
      }
   }
    
      signout(ev) {
        ev.preventDefault();      
            console.log("Sign out successful"),
            browserHistory.push('/login')
 }
 
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Quiz App" style={style} iconElementRight={<FlatButton label={this.state.value}  onClick={this.signout} />} />
                    </div>
                </MuiThemeProvider>
                {this.props.children}
            </div>
        )
    }
}

export default Bar;