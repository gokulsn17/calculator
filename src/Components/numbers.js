import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRedux, value } from '../Redux/reducers/reducer';

const Numbers = () => {

    const dispatch = useDispatch();
    const numbers = ["1","2","3","4","5","6","7","8","9","0"];
    const result = useSelector(value);

    const inputHandler = (data) => {
        dispatch(updateRedux({
            key:"value",
            result: result + data
        }))
    }
    return(
        <div className = "d-flex flex-wrap w-75">
            {
                numbers.map((item,i) => {
                    return(
                        <div key = {i} 
                            className = "boxStyle"
                            onClick = {() => inputHandler(item)}
                        >
                            {item}
                        </div>
                    )
                })   
            }
            <button
                type = "button"  
                className = "w-66 height-50" 
                onClick = {() => {}}
            >
                =
            </button>
        </div>
    )
}

export default Numbers;