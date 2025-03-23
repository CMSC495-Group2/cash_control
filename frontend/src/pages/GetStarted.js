import React from "react";
import NavBar from "../components/NavBar";
import GetStartedForm from "../components/GetStartedForm";

function GetStarted(){
    return(
        <div className="get-started-page">
            <NavBar/>
            <main className="get-started-main">
                <GetStartedForm/>
            </main>
        </div>
    );
}

export default GetStarted;