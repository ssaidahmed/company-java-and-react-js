import React from 'react';
import {connect} from "react-redux";
import Table from './Table'
import {employeeFetchData, deleteEmployee, getEmployee, saveEmployee, updateEmployee} from "../actions/employee";

const columns = ['id','Name', 'Description', 'Department', 'Profession','Edit', 'Delete'];

class TableEmployee extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.handleUpdateRow = this.handleUpdateRow.bind(this);
    }
    handleDeleteRow(id) {
        this.props.deleteEmployee('http://localhost:8080/api/employee', id)
    }
    handleUpdateRow(id) {

    }
    componentDidMount() {
        this.props.fetchData('http://localhost:8080/api/employee')
    }

    render() {

        return (
            <Table column ={columns} data={this.props.employee} deleteRow={this.handleDeleteRow} updateRow={this.handleUpdateRow}/>
        );
    }
}

const mapStateToProps = state =>{

    return{
        employee: state.employee.employees
    };
};

const  mapDispatchToProps = dispatch =>{
  return {
      fetchData: url => {dispatch(employeeFetchData(url))},
      deleteEmployee: (url, id) =>{dispatch(deleteEmployee(url, id))},
      updateEmployee: (url, id) =>{dispatch(updateEmployee(url, id))},
      getEmployee: (url) =>{dispatch(getEmployee(url))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableEmployee);