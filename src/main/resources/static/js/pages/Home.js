import React from "react";
import DialogEmployee from "../components/DialogEmployee";
import DialogDepartment from "../components/DialogDepartment";
import DialogProfession from "../components/DialogProfession";


function Home() {
    return(
        <div className="container ">
            <h1>Home</h1>
            <DialogEmployee/>
            <hr/>
            <DialogDepartment/>
            <hr/>
            <DialogProfession/>
        </div>
    );
}

export default Home;