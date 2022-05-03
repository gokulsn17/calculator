import React from "react";
import { useSelector } from "react-redux";
import { history } from '../Redux/reducers/reducer';

const Question = () => {

    const undoArray = useSelector(history);

    if(undoArray.length){

        let query = Object.keys(undoArray[undoArray.length-1])[0];
        let output = undoArray[undoArray.length-1][query];

        return(
            <div className = "d-flex justify-content-between mb-2">
                <p className="m-0">{query}</p>
                <h5 className="m-0">{output}</h5>
            </div>
        )
    } else{
        return <div className = "outputDiv"></div>;
    }
}

export default Question;