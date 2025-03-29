import React from "react";
import NavBar from "../components/NavBar";
import GetStartedForm from "../components/GetStartedForm";

function GetStarted(){
    return(
        <>
        <NavBar/>
        <div className="get-started-container">
            <div className="form-wrapper">
          <GetStartedForm />
          </div>
        </div>
        </>
    );
}

export default GetStarted;