import React from "react";
import Numbers from "./numbers";
import Operations from "./operations";
import TignometricButtons from "./trignometricButtons";

const LeftSection = () => {

    return(
        <div className = "d-flex flex-wrap w-80">
            <Operations />
            <div className = "d-flex flex-row w-100">
                <Numbers/>
                <TignometricButtons />
            </div>
        </div>
    )
}

export default LeftSection;