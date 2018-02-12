import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory } from 'react-router'
import * as firebase from "firebase";
import { RaisedButton, TextField } from 'material-ui';
import Paper from 'material-ui/Paper';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const style = {
    height: 550,
    width: 320,
    padding: 20,
    margin: "20px 0px 20px 0px",
};
const style1 = {
    margin: "0px 20px 0px 0px"

};
const style2 = {
    color: "white",

};
export default class CreatQuiz extends React.Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this);
        this.next1 = this.next1.bind(this);
        this.sendThru = this.sendThru.bind(this);
    }
    sendThru() {

        console.log("hello world",this.refs.op1)
          
        
    }
    next(ev) {
        const Question = this.refs.Question.getValue();
        const op1 = this.refs.op1.getValue();
        const op2 = this.refs.op2.getValue();
        const op3 = this.refs.op3.getValue();
        const op4 = this.refs.op4.getValue();
        const Answer = this.refs.Answer.getValue();

        let QuizQuestion = {
            Question: Question,
            op1: op1,
            op2: op2,
            op3: op3,
            op4: op4,
            Answer: Answer

        }
        if(Question == "" || op1 === "" || op2 === "" || op3 ==="" || op4 === "" || Answer === ""){
            alert("Please Fill Required Fields")
        }
        else{
        firebase.database().ref('QuizQuestion').push(QuizQuestion)
        console.log(QuizQuestion)
        browserHistory.push('/Start')
    }
        ev.preventDefault();
    }
    next1(ev) {
        ev.preventDefault();
        const Question = this.refs.Question.getValue();
        const op1 = this.refs.op1.getValue();
        const op2 = this.refs.op2.getValue();
        const op3 = this.refs.op3.getValue();
        const op4 = this.refs.op4.getValue();
        const Answer = this.refs.Answer.getValue();

        let QuizQuestion = {
            Question: Question,
            op1: op1,
            op2: op2,
            op3: op3,
            op4: op4,
            Answer: Answer

        }
       if(Question === "" || op1 === "" || op2 === "" || op3 ==="" || op4 === "" || Answer === ""){
            alert("Please Fill Required Fields");
            this.refs.Question.input.focus()
        }
        else{
        firebase.database().ref('QuizQuestion').push(QuizQuestion)
        console.log(QuizQuestion)

        this.refs.Question.input.value = " ";
        this.refs.op1.input.value = " ";
        this.refs.op2.input.value = " ";
        this.refs.op3.input.value = " ";
        this.refs.op4.input.value = " ";
        this.refs.Answer.input.value = " ";
       
    }
        ev.preventDefault();
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <center>
                            <Paper style={style} zDepth={3} >
                                <h1>Create Questions!</h1>
                                <TextField type="text" hintText="Question" floatingLabelText="Question" ref="Question" /> <br />
                                <TextField type="text" hintText="Option 1" floatingLabelText="Option 1" ref="op1" /> <br />
                                <TextField type="text" hintText="Option 2" floatingLabelText="Option 2" ref="op2" /><br />
                                <TextField type="text" hintText="Option 3" floatingLabelText="Option 3" ref="op3" /><br />
                                <TextField type="text" hintText="Option 4" floatingLabelText="Option 4" ref="op4" /><br /><br />
                                <TextField type="text" hintText="Answer" floatingLabelText="Answer" ref="Answer" /><br /><br />

                                <RaisedButton primary={true} onClick={this.next1} style={style1} ><span style={style2}> Add More+ </span>  </RaisedButton>
                                <RaisedButton primary={true} onClick={this.next} style={style1} ><span style={style2}> Save Quiz </span>  </RaisedButton>

                            </Paper>
                        </center>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}