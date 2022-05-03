import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRedux, value, history } from '../Redux/reducers/reducer';

const RightSection1 = () => {

    const dispatch = useDispatch();
    const result = useSelector(value);
    const undoArray = useSelector(history);
 
    const copyHandler = () => {
        navigator.clipboard.writeText(result);
        console.log("Copied the text: " + result);
    }

    const undoHandler = () => {
        console.log(undoArray)
    }

    return(console.log(result),
        <div className = "d-flex w-20 flex-column">
            <button
                type = "button" 
                className = "height-50"
                onClick = {() => { 
                    dispatch(updateRedux({
                        key:"value",
                        result: ""
                    }))
                }}
            >
                CE 
            </button>
            <button
                type = "button" 
                className = "height-50"
                onClick = {() => { 
                    dispatch(updateRedux({
                        key:"value",
                        result: result ? result.toString().slice(0,-1) : ""
                    }))
                }}
            >
                C 
            </button>
            <button
                type = "button"  
                className = "height-50"
                onClick = {() => undoHandler()}
            >
                UNDO  
            </button>
            <button
                type = "button"  
                className = "height-50"
                onClick = {() => copyHandler()}
            >
                COPY  
            </button>
           
        </div>
    )
}

export default RightSection1;