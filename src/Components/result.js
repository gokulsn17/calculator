import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { value, updateRedux } from '../Redux/reducers/reducer';

const Result = () => {

    const dispatch = useDispatch();
    const result = useSelector(value);

    useEffect(() => {
        localStorage.setItem("active", false);
        document.addEventListener("keydown", clearActions);
        // eslint-disable-next-line 
    },[]);

    const clearActions =  (event) => {
        if(localStorage.getItem("active") != "true"){
            switch (event.key) {
                case "Backspace":
                    let str = document.getElementById("inputFeild").value;
                    dispatch(updateRedux({
                        key:"value",
                        result: str ? str.slice(0,-1) : ""
                    }))
                    break;
                case "Delete":
                    dispatch(updateRedux({
                        key:"value",
                        result: ""
                    }))
                    break;
                default:
                    break;
            }
        }
    };

    return(
        <input 
            id = "inputFeild"
            type = "text" 
            value = {result} 
            className = "resultBox" 
            onChange = {(e) => 
                dispatch(updateRedux({
                    key:"value",
                    result: e.target.value
                })) 
            }
            onClick = {() => localStorage.setItem("active",true)}
            onBlur = {() => localStorage.setItem("active",false)}
        />
    )
}

export default Result;