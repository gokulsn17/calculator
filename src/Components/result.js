import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { value, updateRedux } from '../Redux/reducers/reducer';

const Result = () => {

    const dispatch = useDispatch();
    const result = useSelector(value);

    return(
        <input 
            type = "text" 
            value = {result} 
            className = "resultBox" 
            onChange = {(e) => dispatch(updateRedux({
                key:"value",
                result: e.target.value
            }))} 
        />
    )
}

export default Result;