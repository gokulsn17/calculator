import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRedux, value } from '../Redux/reducers/reducer';

const RightSection1 = () => {

    const dispatch = useDispatch();
    const result = useSelector(value);

    return(
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
                        result: result ? result.slice(0,-1) : ""
                    }))
                }}
            >
                C 
            </button>
            <button
                type = "button"  
                className = "height-50"
                onClick = {() => {}}
            >
                UNDO  
            </button>
            <button
                type = "button"  
                className = "height-50"
                onClick = {() => {}}
            >
                COPY  
            </button>
           
        </div>
    )
}

export default RightSection1;