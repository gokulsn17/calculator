import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRedux, value } from '../Redux/reducers/reducer';

const BottomSection = () =>{

    const dispatch = useDispatch();
    const result = useSelector(value);
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
                console.log(output);
                break;
            case "cos":
                output = Math.cos(result.trim().slice(3,result.trim().length))
                console.log(output);
                break;
            case "tan":
                output = Math.tan(result.trim().slice(3,result.trim().length))
                console.log(output);
                break;
            default:
                console.log("error")
                break;
        }
        if(output){
            dispatch(updateRedux({
                key:"value",
                result: output
            }))
        }
    }

    const resultHandler = () => {
        if(result.includes("sin") || result.includes("cos") || result.includes("tan")){
            trignometricHandler()
        } else{
            let parsed = parseString(result);
            if(parsed){
                let output = calculate(parsed);
                if(output){
                    dispatch(updateRedux({
                        key:"value",
                        result: output
                    }))
                } else {
                    console.log("error")
                }
            } else {
                console.log("error")
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
            console.log('Error: unable to resolve calculation');
            return false;
        } else {
            return data[0];
        }
    }

    return(
        <div className = "d-flex">
            {
                data.map((item, i) => {
                    return(
                        <div 
                            key = {i}
                            className = "w-20 boxStyle"
                            onClick = {() => inputHandler(item)}
                        >
                            {item}
                        </div>
                    )
                })
            }
            <button
                type = "button"  
                className = "w-40 height-50" 
                onClick = {() => resultHandler()}
            >
                =
            </button>
        </div>
    )
}

export default BottomSection;
