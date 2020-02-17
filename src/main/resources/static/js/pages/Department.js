import React from "react";
import DialogDepartment from "../components/DialogDepartment";
import TableDepartment from "../components/TableDepartment";


function Department() {
    return(
        <div>
            <h1>Department</h1>
            <hr/>

            <DialogDepartment/>
            <hr/>
            <TableDepartment/>
        </div>
    );
}

export default Department;