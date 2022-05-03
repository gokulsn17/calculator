import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRedux, value, history } from '../Redux/reducers/reducer';

const BottomSection = () =>{

    const dispatch = useDispatch();
    const result = useSelector(value);
    const undoArray = useSelector(history);
    const data = ["0","(",")"];

    const inputHandler = (data) => {
        dispatch(updateRedux({
            key:"value",
            result: result + data
        }))
    }
    
    const trignometricHandler = () => {
        let output = "";
        switch (result.trim().slice(0,3)) {
            case "sin":
                output = Math.sin(result.trim().slice(3,result.trim().length))
                break;
            case "cos":
                output = Math.cos(result.trim().slice(3,result.trim().length))
                break;
            case "tan":
                output = Math.tan(result.trim().slice(3,result.trim().length))
                break;
            default:
                dispatch(updateRedux({
                    key:"errorText",
                    result: "please enter in this format 'sin 45'"
                }))
                break;
        }
        if(output){
            dispatch(updateRedux({
                key:"history",
                result: [...undoArray,{[result]:output}]
            }))
            dispatch(updateRedux({
                key:"value",
                result: output
            }))
        } else {
            dispatch(updateRedux({
                key:"errorText",
                result: "please enter in this format eg :'sin 45'"
            }))
        }
    }

    const endsWithNumber = (str) => {
        return str.charAt(str.length-1) == ")" ? true : isNaN(str.slice(-1)) ? false : true;
    }
    
    const resultHandler = (result) => {
        if(result.length === 0){
            dispatch(updateRedux({
                key:"errorText",
                result: "please enter a input"
            }))
        } else if(!endsWithNumber(result)){
            dispatch(updateRedux({
                key:"errorText",
                result: "invalid input please check"
            }))
        } else if(result.includes("sin") || result.includes("cos") || result.includes("tan")){
            trignometricHandler()
        } else {
            if(result.includes("(") && result.includes(")")){
                dispatch(updateRedux({
                    key:"errorText",
                    result: "sorry we are working on calculations inluding paranthesis"
                }))
            } else{
                let parsed = parseString(result);
                if(parsed){
                    let output = calculate(parsed);
                    if(output){
                        dispatch(updateRedux({
                            key:"history",
                            result: [...undoArray,{[result]:output}]
                        }))
                        dispatch(updateRedux({
                            key:"value",
                            result: output
                        }))
                    } else {
                        dispatch(updateRedux({
                            key:"errorText",
                            result: "invalid input please check"
                        }))
                    }
                } else {
                    dispatch(updateRedux({
                        key:"errorText",
                        result: "invalid input please check"
                    }))
                }
            }
        }
    }

    const parseString = (s) => {

        var calculation = [],
        current = '';
        for (var i = 0, ch; ch = s.charAt(i); i++) {
            if ('^*/+-'.indexOf(ch) > -1) {
                if (current == '' && ch == '-') {
                    current = '-';
                } else {
                    calculation.push(parseFloat(current), ch);
                    current = '';
                }
            } else {
                current += s.charAt(i);
            }
        }
        if (current != '') {
            calculation.push(parseFloat(current));
        }
        return calculation;
    }
    
    const calculate = (data) => {

        let operators = [
            {'^': (a, b) => Math.pow(a, b)},
            {'*': (a, b) => a * b, '/': (a, b) => a / b},
            {'+': (a, b) => a + b, '-': (a, b) => a - b}
        ];
        let result = [];
        let currentOp;

        for (var i = 0; i < operators.length; i++) {
            for (var j = 0; j < data.length; j++) {
                if (operators[i][data[j]]) {
                    currentOp = operators[i][data[j]];
                } else if (currentOp) {
                    result[result.length - 1] = currentOp(result[result.length - 1], data[j]);
                    currentOp = null;
                } else {
                    result.push(data[j]);
                }
            }
            data = result;
            result = [];
        }
        if (data.length > 1) {
            return false;
        } else {
            return data[0];
        }
    }

    return(
        <div className = "d-flex ">
            {
                data.map((item, i) => {
                    return(
                      <div className = "w-20 boxStyle">
                        <div 
                            key = {i}
                            className = "numberButtonStyle"
                            onClick = {() => inputHandler(item)}
                        >
                            {item}
                        </div>
                      </div>
                    )
                })
            }
            <div className = "w-40 boxStyleRight">
              <button
                  type = "button"
                  className = "sumButtonStyle" 
                  onClick = {() => resultHandler(result)}
              >
                  =
              </button>
            </div>
        </div>
    )
}

export default BottomSection;