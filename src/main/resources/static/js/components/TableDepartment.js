import React from 'react';
import {connect} from "react-redux";
import Table from './Table'
import DialogEmployee from './DialogEmployee';

import {departmentFetchData, deleteDepartment, saveDepartment, updateDepartment} from "../actions/department";

const columns = ['id','Name', 'Description', 'Parent Department','Edit', 'Delete'];
const forGenericModal =[
    {
        label:'id',
        name:'id',
        type:'input'
    },
    {
        label:'Название',
        name:'name',
        type:'input'
    },
    {
        label:'Описание',
        name:'description',
        type:'input'
    },
    {
        label:'Выерите отдел',
        name:'parentDepartmentId',
        type:'select'
    },


];

class TableDepartment extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.handleUpdateRow = this.handleUpdateRow.bind(this);
    }
    handleDeleteRow(id) {
        this.props.deleteDepartment('http://localhost:8080/api/department/'+id, id)
    }
    handleUpdateRow(data) {
        this.props.updateDepartment('http://localhost:8080/api/department', data);
    }
    componentDidMount() {
        this.props.fetchData('http://localhost:8080/api/department')
    }

    render() {

        return (

            <Table modalForm = {forGenericModal} column ={columns} data={this.props.department}  departments={this.props.department} onDeleteRow={this.handleDeleteRow} onUpdateRow={this.handleUpdateRow}/>

        );
    }
}

const mapStateToProps = state =>{

    return{

        department:state.department.departments
    };
};

const  mapDispatchToProps = dispatch =>{
    return {
        fetchData: url => {dispatch(departmentFetchData(url))},
        deleteDepartment: (url, id) =>{dispatch(deleteDepartment(url, id))},
        updateDepartment: (url, data) =>{dispatch(updateDepartment(url, data))},

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableDepartment);