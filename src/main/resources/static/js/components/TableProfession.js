import React from 'react';
import {connect} from "react-redux";
import Table from './Table'


import {professionFetchData, deleteProfession, saveProfession, updateProfession} from "../actions/profession";

const columns = ['id','Name', 'Description', 'Edit', 'Delete'];
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


];

class TableProfession extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.handleUpdateRow = this.handleUpdateRow.bind(this);
    }
    handleDeleteRow(id) {
        this.props.deleteProfession('http://localhost:8080/api/profession/'+id, id)
    }
    handleUpdateRow(data) {
        this.props.updateProfession('http://localhost:8080/api/profession', data);
    }
    componentDidMount() {
        this.props.fetchData('http://localhost:8080/api/profession')
    }

    render() {

        return (

            <Table modalForm = {forGenericModal} column ={columns} data={this.props.profession} professions={this.props.profession} onDeleteRow={this.handleDeleteRow} onUpdateRow={this.handleUpdateRow}/>

        );
    }
}

const mapStateToProps = state =>{

    return{
        profession:state.profession.professions,

    };
};

const  mapDispatchToProps = dispatch =>{
    return {
        fetchData: url => {dispatch(professionFetchData(url))},
        deleteProfession: (url, id) =>{dispatch(deleteProfession(url, id))},
        updateProfession: (url, data) =>{dispatch(updateProfession(url, data))},

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableProfession);