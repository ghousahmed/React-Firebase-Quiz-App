import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from "firebase";





class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Score: ""

        }
    }

     componentWillMount() {

        firebase.database().ref('Score').on('value', (data) => {
            console.log(data.val().S)
            this.setState({
                Score: data.val().S
            })
        })
        
    }
   
    render() {
      
        return (
            <div>
                <MuiThemeProvider>
                    <center>
                        <div>

                            <h1>Quiz Finished</h1>
                            <h1>Your Score {this.state.Score}</h1>


                           
                        </div>
                    </center>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Result;