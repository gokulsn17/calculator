import React from "react";
import { useDispatch, useSelector } from "react-redux";
import XRegExp from "xregexp";
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
        return str.charAt(str.length ? str.length-1 : 0) === ")" 
                ? true 
                : isNaN(str.slice(-1)) 
                ? false 
                : true;
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
                outputHandler(result.replaceAll(" ",""))
            } else{
                let parsed = parseString(result);
                if(parsed){
                    let output = calculateResult(parsed);
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

        var calculateResult = [],
        current = '';

        // eslint-disable-next-line
        for(var i = 0, ch; ch = s.charAt(i); i++) {
            if('^*/+-'.indexOf(ch) > -1) {
                if(current === '' && ch === '-') {
                    current = '-';
                } else {
                    calculateResult.push(parseFloat(current), ch);
                    current = '';
                }
            } else {
                current += s.charAt(i);
            }
        }
        if(current !== '') {
            calculateResult.push(parseFloat(current));
        }
        return calculateResult;
    }
    
    const calculateResult = (data) => {

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

    const outputHandler = (str) => {
        try {
            let temp = str;
            let arr = XRegExp.matchRecursive(str.toString(), '\\(', '\\)', 'g');
            console.log(arr) 
            arr?.forEach(e => {
                if(e.includes("(") && e.includes(")")){
                    dispatch(updateRedux({
                        key:"errorText",
                        result: "complex operation we are working on this"
                    }))
                } else {
                    let res = calculateResult(parseString(e));
                    temp = temp.replace(`(${e})`,res);
                }
            })
            let res = calculateResult(parseString(temp));
            dispatch(updateRedux({
                key:"history",
                result: [...undoArray,{[str]:res}]
            }))
            dispatch(updateRedux({
                key:"value",
                result: res
            }))
         } catch (error) {
             dispatch(updateRedux({
                 key:"errorText",
                 result: "missing Brackets please check"
             }))
         }
    }

    return(
        <div className = "d-flex ">
            {
                data.map((item, i) => {
                    return(
                      <div className = "w-20 boxStyle" key = {i}>
                        <div 
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