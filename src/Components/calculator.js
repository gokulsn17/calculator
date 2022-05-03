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
            <Question />
            <Error />
            <Result />
            <div className = "d-flex flex-row ">
                <LeftSection />
                <RightSection />
            </div>
            <BottomSection />
        </div>
    )
}

export default Calculator;