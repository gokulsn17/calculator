import React from "react";
import { useSelector } from "react-redux";
import { history } from '../Redux/reducers/reducer';

const Question = () => {

    const undoArray = useSelector(history);

    if(undoArray.length){
        let query = Object.keys(undoArray[undoArray.length-1])[0];
        let output = undoArray[undoArray.length-1][query];
        return(
            <div className = "d-flex justify-content-between p-3">
                <p>{query}</p>
                <h6>{output}</h6>
            </div>
        )
    } else{
        return <div className = "outputDiv"></div>;
    }
    
}

export default Question;