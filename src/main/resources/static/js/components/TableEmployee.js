import React from 'react';
import {connect} from "react-redux";
import Table from './Table'


import {employeeFetchData, deleteEmployee, getEmployee, saveEmployee, updateEmployee} from "../actions/employee";

const columns = ['id','Name', 'Description', 'Department', 'Profession','Edit', 'Delete'];
const forGenericModal =[
    {
        label:'id',
        name:'id',
        type:'input'
    },
    {
        label:'Ф.И.О',
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
        name:'departmentId',
        type:'select'
    },
    {
        label:'Выберите профессию',
        name:'professionId',
        type:'select'
    }

];

class TableEmployee extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.handleUpdateRow = this.handleUpdateRow.bind(this);
    }
    handleDeleteRow(id) {
        this.props.deleteEmployee('http://localhost:8080/api/employee/'+id, id)
    }
    handleUpdateRow(data) {
        this.props.updateEmployee('http://localhost:8080/api/employee', data);
    }
    componentDidMount() {
        this.props.fetchData('http://localhost:8080/api/employee')
    }

    render() {

        return (

            <Table modalForm = {forGenericModal} column ={columns} professions={this.props.profession} departments={this.props.department} data={this.props.employee} onDeleteRow={this.handleDeleteRow} onUpdateRow={this.handleUpdateRow}/>

        );
    }
}

const mapStateToProps = state =>{

    return{
        employee: state.employee.employees,
        profession:state.profession.professions,
        department:state.department.departments
    };
};

const  mapDispatchToProps = dispatch =>{
  return {
      fetchData: url => {dispatch(employeeFetchData(url))},
      deleteEmployee: (url, id) =>{dispatch(deleteEmployee(url, id))},
      updateEmployee: (url, data) =>{dispatch(updateEmployee(url, data))},

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableEmployee);