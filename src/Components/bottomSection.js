import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRedux, value } from '../Redux/reducers/reducer';

const BottomSection = () =>{

    const dispatch = useDispatch();
    const result = useSelector(value);
    const data = ["0","(",")"];

    const inputHandler = (data) => {
        dispatch(updateRedux({
            key:"value",
            result: result + data
        }))
    }

    return(
        <div className = "d-flex">
            {
                data.map((item, i) => {
                    return(
                        <div 
                            key = {i}
                            className = "w-20 boxStyle"
                            onClick = {() => inputHandler(item)}
                        >
                            {item}
                        </div>
                    )
                })
            }
            <button
                type = "button"  
                className = "w-40 height-50" 
                onClick = {() => {}}
            >
                =
            </button>
        </div>
    )
}

export default BottomSection;
