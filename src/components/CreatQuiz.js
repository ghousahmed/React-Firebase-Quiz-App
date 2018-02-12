import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory } from 'react-router'
import * as firebase from "firebase";
import { RaisedButton, TextField } from 'material-ui';
import Paper from 'material-ui/Paper';

const style = {
    height: 600,
    width: 320,
    padding: 20,
    margin: "20px 0px 20px 0px",
};

const style2 = {
    color: "white",

};
export default class CreatQuiz extends React.Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this);
    }
    next(ev) {
        ev.preventDefault();
        const QuizTitle = this.refs.quiztitle.getValue();
        const Totalmarks = this.refs.totmarks.getValue();
        const Passingmarks = this.refs.passmarks.getValue();
        const Time = this.refs.time.getValue();
         const totalquestion = this.refs.totalquestion.getValue();
        let QuizDetail = {
            Title: QuizTitle,
            Totalmarks: Totalmarks,
            Passingmarks: Passingmarks,
            Totaltime: Time,
            TotalQuestion: totalquestion

        }
        console.log(QuizDetail)
        if (QuizTitle === "" || Totalmarks === "" || Passingmarks === "" || Time === "") {
            alert("Please Fill Required Fields")
        }
        else {
            firebase.database().ref('QuizDetail').set(QuizDetail);
            browserHistory.push('/CreateQuestion')
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <center>
                            <Paper style={style} zDepth={3} >
                                <h1>Thanks for Creat Quiz!</h1>
                                <TextField type="text" hintText="Title" floatingLabelText="Quiz Title" ref="quiztitle" /> <br />
                                <TextField type="number" hintText="Total Marks" floatingLabelText="Total Marks" ref="totmarks" /> <br />
                                <TextField type="number" hintText="Passing Marks" floatingLabelText="Passing Marks" ref="passmarks" /><br />
                                <TextField type="number" hintText="Total Time" floatingLabelText="Total Time" ref="time" /><br />
                                <TextField type="number" hintText="Total Question" floatingLabelText="Total Question" ref="totalquestion" /><br /><br />

                                <RaisedButton primary={true} onClick={this.next} ><span style={style2}> Next Step </span>  </RaisedButton>
                            </Paper>
                        </center>

                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}