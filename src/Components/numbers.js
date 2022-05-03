import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRedux, value, errorText } from '../Redux/reducers/reducer';

const Numbers = () => {

    const dispatch = useDispatch();
    const numbers = ["1","2","3","4","5","6","7","8","9"];
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
        <div className = "d-flex flex-wrap w-75">
            {
                numbers.map((item,i) => {
                    return(
                      <div className = "boxStyle">
                        <div key = {i} 
                            className = "numberButtonStyle"
                            onClick = {() => inputHandler(item)} >
                            {item}
                        </div>
                      </div>
                    )
                })   
            }
        </div>
    )
}

export default Numbers;