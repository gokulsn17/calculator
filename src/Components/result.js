import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { value, updateRedux, errorText } from '../Redux/reducers/reducer';

const Result = () => {

    const dispatch = useDispatch();
    const result = useSelector(value);
    const error = useSelector(errorText);

    useEffect(() => {
        localStorage.setItem("active", false);
        document.addEventListener("keydown", clearActions);
        // eslint-disable-next-line 
    },[]);

    const clearActions =  (event) => {
        if(localStorage.getItem("active") !== "true" || event.key === "Delete"){
            switch (event.key) {
                case "Backspace":
                    let str = document.getElementById("inputFeild").value;
                    dispatch(updateRedux({
                        key:"value",
                        result: str ? str.slice(0,-1) : ""
                    }))
                    if(error){
                        dispatch(updateRedux({
                            key:"errorText",
                            result: ""
                        }))
                    }
                    break;
                case "Delete":
                    dispatch(updateRedux({
                        key:"value",
                        result: ""
                    }))
                    if(error){
                        dispatch(updateRedux({
                            key:"errorText",
                            result: ""
                        }))
                    }
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
            autoComplete = "new-password"
            onChange = {(e) => {
                    dispatch(updateRedux({
                        key:"value",
                        result: e.target.value
                    })) 
                    if(error){
                        dispatch(updateRedux({
                            key:"errorText",
                            result: ""
                        }))
                    }
                }
            }
            onClick = {() => localStorage.setItem("active",true)}
            onBlur = {() => localStorage.setItem("active",false)}
        />
    )
}

export default Result;