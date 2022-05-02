import React from "react";
import BottomSection from "./bottomSection";
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
            <BottomSection />
        </div>
    )
}

export default Calculator;