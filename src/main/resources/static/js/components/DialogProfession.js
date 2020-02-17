import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {saveProfession} from "../actions/profession";
import { useDispatch } from "react-redux";

function DialogProfession() {

    const [show, setShow] = useState(false);

    const [inputs, setInputs] = useState ({});
    const dispatch = useDispatch();


    const handleSubmit = (e)=>{
        e.preventDefault();
        setShow(false);
        dispatch(saveProfession('http://localhost:8080/api/profession', inputs));
    };


    const handleInputChange = (event) => {
        event.persist();

        setInputs (inputs => ({...inputs, [event.target.name]: event.target.value}));
    };


    return (
        <>
            <Button variant="primary" onClick={()=>setShow(true)}>
                Add profession
            </Button>

            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add profession</Modal.Title>
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
export default DialogProfession;
