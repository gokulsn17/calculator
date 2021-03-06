import React from "react";
import BottomSection from "./bottomSection";
import Error from "./error";
import LeftSection from "./leftSection";
import Question from "./question";
import Result from "./result";
import RightSection from "./rightSection";

const Calculator = () => {

    return(
        <div className = "d-flex flex-column p-3">
            <div className="contentDiv">
                <Question />
                <Result />
                <Error />
                <div className = "d-flex flex-row ">
                    <LeftSection />
                    <RightSection />
                </div>
                <BottomSection />
            </div>
        </div>
    )
}

export default Calculator;