import React from "react";
import LeftSection from "./leftSection";
import Result from "./result";
import RightSection from "./rightSection";

const Calculator = () => {
    return(
        <div className = "d-flex flex-column">
            <Result />
            <div className = "d-flex flex-row">
                <LeftSection />
                <RightSection />
            </div>
        </div>
    )
}

export default Calculator;