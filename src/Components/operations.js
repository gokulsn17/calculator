import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRedux, value } from "../Redux/reducers/reducer";

const Operations = () => {

    const dispatch = useDispatch();
    const result = useSelector(value);

    const inputHandler = (data) => {
        dispatch(updateRedux({
            key:"value",
            result: result + data
        }))
    }

    return(
        <div className = "d-flex w-100">
            <div
                className = "boxStyle"
                onClick = {() => inputHandler("+")}
            >
                + 
            </div>
            <div
                className = "boxStyle"
                onClick = {() => inputHandler("-")}
            >
                -
            </div>
            <div 
                className = "boxStyle"
                onClick = {() => inputHandler("/")}
            >
                / 
            </div>
            <div 
                className = "boxStyle"
                onClick = {() => inputHandler("*")}
            >
                *  
            </div>
        </div>
    )
}

export default Operations;