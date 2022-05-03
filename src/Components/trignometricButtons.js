import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRedux, value } from "../Redux/reducers/reducer";

const TignometricButtons = () => {

    const dispatch = useDispatch();
    const result = useSelector(value);

    const inputHandler = (data) => {
        dispatch(updateRedux({
            key:"value",
            result: result + data
        }))
    }

    return(
        <div className = "d-flex w-25 flex-column">
             <div 
                className = "boxStyleRight"
                onClick = {() => inputHandler("sin")}
            >
                sin
            </div>
            <div 
                className = "boxStyleRight"
                onClick = {() => inputHandler("cos")}
            >
                cos
            </div>
            <div 
                className = "boxStyleRight"
                onClick = {() => inputHandler("tan")}
            >
                tan
            </div>
        </div>
    )
}

export default TignometricButtons;