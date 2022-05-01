import React from "react";
import Calculator from "../Components/calculator";

const Home = () => {
    return(
        <div>
            <div>
                <h1 className = "d-flex  justify-content-center" >
                   React Calculator
                </h1> 
                <Calculator />
            </div>
        </div>
    )
}

export default Home;