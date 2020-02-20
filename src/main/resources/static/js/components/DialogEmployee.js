import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {departmentFetchData} from "../actions/department";
import {professionFetchData} from "../actions/profession";
import {saveEmployee} from "../actions/employee";
import { useDispatch, useSelector } from "react-redux";
import {AlertSuccess} from './Alert';
import {HIDE_ALERT, SHOW_ALERT} from '../constants/alert';


function DialogEmployee() {

    const [show, setShow] = useState(false);

    const [inputs, setInputs] = useState ({
        id:'',
        name:'',
        description:'',
        departmentId:'',
        professionId:''
    });
    const departments = useSelector(state => state.department.departments);
    const alert = useSelector(state => state.alert.alert);
    const professions = useSelector(state => state.profession.professions);
    const dispatch = useDispatch();



    const handleSubmit = (e)=>{
        e.preventDefault();

        dispatch(saveEmployee('http://localhost:8080/api/employee', inputs));
        setInputs(inputs=>({...inputs,
            id:'',
            name:'',
            description:'',
            departmentId:'',
            professionId:''
        }));

        setShow(false);
        showAlert('Объект успешно сохранен!', 'Success', 'success');
    };
    const hide =()=>{
      dispatch({type:HIDE_ALERT})
    };

    const showAlert =(text, type, variant) =>{
      dispatch({type:SHOW_ALERT, payload:{variant:variant,visible:true, text:text, type:type}})
    };
    useEffect(()=>{
        dispatch(departmentFetchData('http://localhost:8080/api/department'));
        dispatch(professionFetchData('http://localhost:8080/api/profession'));
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
            <AlertSuccess alert ={alert} hide={hide}/>
            <Button variant="primary" onClick={()=>setShow(true)}>
                Add employee
            </Button>

            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit} id="form_add_entity" name="employee">
                        <input type="hidden" name="id" onChange = {handleInputChange} value = {inputs.id || ''}/>
                        <div className="form-group">
                            <label htmlFor="name">Ф.И.О</label>
                            <input type="text" className="form-control" name="name" onChange = {handleInputChange} value = {inputs.name || ''}
                                   placeholder="Ф.И.О"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Описание</label>
                            <input type="text" className="form-control" onChange = {handleInputChange} value = {inputs.description || '' } name="description" id="description"
                                   placeholder="Описание"/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="departmentId">Выберите отдел</label>
                        <select className="form-control" id="departmentId" onChange = {handleInputChange} value = {inputs.departmentId || ''} name="departmentId">
                            {dataForSelect(departments)}
                        </select>
                        </div>
                        <div className="form-group">
                        <label htmlFor="professionId">Выберите профессию</label>
                        <select className="form-control" id="professionId" name="professionId" onChange = {handleInputChange} value = {inputs.professionId || ''} >
                            {dataForSelect(professions)}

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
export default DialogEmployee;

