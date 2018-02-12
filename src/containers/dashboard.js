import React, { Component } from 'react';
import { Link } from 'react-router'

import {AppBar} from 'material-ui';

class Dashboard extends Component {
    render() {
        return (<div>
            
            
            <AppBar title="This is Dashboard"></AppBar>
           

            <Link to="/dashboard/profile">Profile</Link>
            <Link to="/dashboard/about">About</Link>
            <Link to="/dashboard/contact">Contact</Link>

            {this.props.children}
        </div>)
    }
}

export default Dashboard;