import React from "react";
import TableEmployee from '../components/TableEmployee';
import DialogEmployee from '../components/DialogEmployee';

function Employee(props) {


    return(
        <div>
            <h1>Employee</h1>
            <hr/>

            <DialogEmployee/>
            <hr/>
            <TableEmployee/>
        </div>
    );
}

export default Employee;