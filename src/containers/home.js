import React, { Component } from 'react';
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';


class LoginSignup extends Component {


    render() {

        return (
            <div>
                <MuiThemeProvider>
                    <center>
                        <div>
                            <h1>Quiz App Home</h1>
                            <Link to="/login"><RaisedButton type="submit" primary={false}>Log In</RaisedButton></Link>
                            <Link to="/signup"><RaisedButton type="submit" primary={true} style={{ margin: 12 }}>Sign Up</RaisedButton></Link>
                        </div>
                    </center>
                </MuiThemeProvider>

            </div>
        )
    }
}

export default LoginSignup;