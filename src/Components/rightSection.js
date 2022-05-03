import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRedux, value, history, errorText } from '../Redux/reducers/reducer';

const RightSection1 = () => {

    const dispatch = useDispatch();
    const result = useSelector(value);
    const undoArray = useSelector(history);
    const error = useSelector(errorText);
 
    const copyHandler = () => {
        navigator.clipboard.writeText(result);
        console.log("Copied text " + result);
    }

    const undoHandler = () => {
        if(undoArray.length > 1){
            let query = Object.keys(undoArray[undoArray.length-2])[0];
            let output = undoArray[undoArray.length-2][query];
            let temp = [...undoArray];
            temp.pop();
            dispatch(updateRedux({
                key:"history",
                result: [...temp]
            }))
            dispatch(updateRedux({
                key:"value",
                result: output
            }))
        } else{
            dispatch(updateRedux({
                key:"history",
                result: []
            }))
            dispatch(updateRedux({
                key:"value",
                result: ""
            }))
        }
    }

    return(
        <div className = "d-flex w-20 flex-column" style={{marginTop:"10px"}}>
            <div className = "boxStyleRight">
                <button
                    type = "button" 
                    className = "cButtonStyle"
                    onClick = {() => { 
                        dispatch(updateRedux({
                            key:"value",
                            result: ""
                        }))
                        dispatch(updateRedux({
                            key:"history",
                            result: []
                        }))
                        if(error){
                            dispatch(updateRedux({
                                key:"errorText",
                                result: ""
                            }))
                        }
                    }}
                >
                    CE 
                </button>
            </div>
            <div className = "boxStyleRight">
                <button 
                    type = "button" 
                    className = "cButtonStyle cButtonMargin"
                    onClick = {() => { 
                        dispatch(updateRedux({
                            key:"value",
                            result: result ? result.toString().slice(0,-1) : ""
                        }))
                        if(error){
                            dispatch(updateRedux({
                                key:"errorText",
                                result: ""
                            }))
                        }
                    }}
                >
                    C 
                </button>
            </div>
            <div className = "boxStyleRight">
                <button
                    type = "button"  
                    className = "cButtonStyle"
                    onClick = {() => undoHandler()}
                >
                    UNDO  
                </button>
            </div>
            <div className = "boxStyleRight">
                <button
                    type = "button"  
                    className = "cButtonStyle"
                    onClick = {() => copyHandler()}
                >
                    COPY  
                </button>
            </div>
        </div>
    )
}

export default RightSection1;