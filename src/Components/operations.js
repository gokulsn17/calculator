import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorText, updateRedux, value } from "../Redux/reducers/reducer";

const Operations = () => {

    const dispatch = useDispatch();
    const result = useSelector(value);
    const error = useSelector(errorText);

    const inputHandler = (data) => {
        dispatch(updateRedux({
            key:"value",
            result: result + data
        }))
        if(error){
            dispatch(updateRedux({
                key:"errorText",
                result: ""
            }))
        }
    }

    return(
        <div className = "d-flex w-100">
            <div className = "boxStyle">
              <div
                  className = "actionButtonStyle"
                  onClick = {() => inputHandler("+")}
              >
                  + 
              </div>
            </div>
           <div className = "boxStyle">
            <div
                  className = "actionButtonStyle"
                  onClick = {() => inputHandler("-")}
              >
                  -
              </div>
           </div>
            <div className = "boxStyle">
              <div 
                  className = "actionButtonStyle"
                  onClick = {() => inputHandler("/")}
              >
                  / 
              </div>
            </div>
            <div className = "boxStyle">
              <div 
                  className = "actionButtonStyle"
                  onClick = {() => inputHandler("*")}
              >
                  *  
              </div>
            </div>
        </div>
    )
}

export default Operations;