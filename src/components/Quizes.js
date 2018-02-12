import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from "firebase";





class Quizes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         don: [],
         count: 0,
         
        


     }
     
 }
componentWillMount() {
    var don = [];
    firebase.database().ref('QuizDetail/' ).on('value', (data) => {
        let obj = data.val();
             for (var prop in obj){
                don.push(obj[prop]);
           
            this.setState({
                don: don
            })
        }  
            
          
    })
    let a = this.state.count + 1 
    this.setState({ count : a})
    
}

    render() {
   
        return (
            <div>
                <MuiThemeProvider>
                    <center>
                        <div>

                            <h1>Quiz Not Available For This Time!</h1>

                        </div>
                    </center>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Quizes;