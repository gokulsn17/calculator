import React from "react";
import { useSelector } from "react-redux";
import { errorText } from '../Redux/reducers/reducer';

const Error = () => {

    const error = useSelector(errorText);

    return(
        <div className = "d-flex">
            <p className = "errorText">{error}</p>
        </div>
    )
    
}

export default Error;