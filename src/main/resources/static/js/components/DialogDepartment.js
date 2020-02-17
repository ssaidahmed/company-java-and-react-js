import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {departmentFetchData} from "../actions/department";
import {saveDepartment} from "../actions/department";
import { useDispatch, useSelector } from "react-redux";

function DialogDepartment() {

    const [show, setShow] = useState(false);

    const [inputs, setInputs] = useState ({});
    const departments = useSelector(state => state.department.departments);
    const dispatch = useDispatch();


    const handleSubmit = (e)=>{
        e.preventDefault();
        setShow(false);
        dispatch(saveDepartment('http://localhost:8080/api/department', inputs));
    };

    useEffect(()=>{
        dispatch(departmentFetchData('http://localhost:8080/api/department'));
    }, []);

    const dataForSelect = (mass) =>{
        let array = [];
        mass.map((item, index) =>{
            let id = Object.values(item)[0];
            let name = Object.values(item)[1];
            array.push(<option key={index} value={id}>{name}</option>)
        });
        array.push(<option key={array.length} value={null}>{}</option>);

        return array;
    };

    const handleInputChange = (event) => {
        event.persist();

        setInputs (inputs => ({...inputs, [event.target.name]: event.target.value}));
    };


    return (
        <>
            <Button variant="primary" onClick={()=>setShow(true)}>
                Add department
            </Button>

            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit} id="form_add_entity" name="employee">
                        <input type="hidden" name="id" onChange = {handleInputChange} value = {inputs.id || ''}/>
                        <div className="form-group">
                            <label htmlFor="name">Название</label>
                            <input type="text" className="form-control" name="name" onChange = {handleInputChange} value = {inputs.name || ''}
                                   placeholder="Название"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Описание</label>
                            <input type="text" className="form-control" onChange = {handleInputChange} value = {inputs.description || '' } name="description" id="description"
                                   placeholder="Описание"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="departmentId">Выберите родительский отдел</label>
                            <select className="form-control" id="parentDepartmentId" onChange = {handleInputChange} value = {inputs.parentDepartmentId || ''} name="parentDepartmentId">
                                {dataForSelect(departments)}
                            </select>
                        </div>



                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default DialogDepartment;