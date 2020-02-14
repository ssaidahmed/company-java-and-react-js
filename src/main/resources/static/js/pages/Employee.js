import React from "react";
import TableEmployee from '../components/TableEmployee';
import DialogEmployee from '../components/DialogEmployee';

function Employee(props) {

    function showModalDialog(e) {
        e.preventDefault();
        console.log('По ссылке кликнули.');
    }
    return(
        <div className='container pt-4'>
            <h1>Employee</h1>
            <hr/>

            <DialogEmployee/>
            <hr/>
            <TableEmployee/>
        </div>
    );
}

export default Employee;