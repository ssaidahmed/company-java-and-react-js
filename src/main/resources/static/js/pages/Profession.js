import React from "react";
import DialogProfession from "../components/DialogProfession";
import TableProfession from "../components/TableProfession";


function Profession() {
    return(
        <div>
            <h1>Profession</h1>
            <hr/>

            <DialogProfession/>
            <hr/>
            <TableProfession/>
        </div>
    );
}

export default Profession;
