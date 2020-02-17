import  React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false,
            inputs:{}
        };
        this.deleteRow = this.deleteRow.bind(this);
        this.updateRow = this.updateRow.bind(this);
        this.genericRowForTable = this.genericRowForTable.bind(this);
        this.genericHeadRowTable = this.genericHeadRowTable.bind(this);
        this.genericFormForModal = this.genericFormForModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.dataForSelect = this.dataForSelect.bind(this);
        this.setShow = this.setShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.genericHeadRowTable = this.genericHeadRowTable.bind(this);




    }

    handleSubmit(e){
        e.preventDefault();
        let data = this.state.inputs;
        console.log(data);
        this.props.onUpdateRow(data);
        this.setShow(false);
    }

    setShow(boll){
        this.setState({
            show:boll
        })
    }

    dataForSelect(mass){
        let array = [];
        mass.map((item, index) =>{
            let id = Object.values(item)[0];
            let name = Object.values(item)[1];
            array.push(<option key={index} value={id}>{name}</option>)
        });
        array.push(<option key={array.length} value={null}>{}</option>);
        return array;
    };

    handleInputChange(e){

        this.setState({inputs:{...this.state.inputs, [e.target.name]: e.target.value}})
    }

    deleteRow(e, id){
        e.preventDefault();
        this.props.onDeleteRow(id);
    }
    updateRow(e, id){
        e.preventDefault();

        let entity = this.props.data[id];

        let obj={};
        Object.entries(entity).forEach(element => {
            if(element[1] !== null && element[1].id){
                obj[element[0]+'Id'] = element[1].id
            }else if(element[0] !== 'new'){
                obj[element[0]] = element[1]
            }


        });


        this.setState({inputs:{...this.state.inputs,...obj}});


        this.setShow(true);

    }

    genericHeadRowTable(column){
        return column.map((item, index) =>{
            return(

                <th  key={index} scope="col">{item}</th>

            );
        });
    }

    genericFormForModal(mass){
        return mass.map((item, index) =>{
            let label = Object.values(item)[0];
            let name = Object.values(item)[1];
            let type = Object.values(item)[2];

            if(type === 'input'){
                if(name === 'id'){
                    return <input key={index} type="hidden" name="id" onChange = {this.handleInputChange} value = {this.state.inputs[name] || ''}/>
                }
                return(
                    <div key={index} className="form-group">
                        <label htmlFor={name}>{label}</label>
                        <input key={index} type="text" className="form-control" name={name} onChange = {this.handleInputChange} value = {this.state.inputs[name] || ''}
                               placeholder={name}/>
                    </div>
                );
            }else {
                if(name === 'departmentId' || name === 'parentDepartmentId') {
                    return (
                        <div key={index} className="form-group">
                            <label htmlFor={name}>{label}</label>
                            <select key={index} className="form-control" id={name} onChange={this.handleInputChange}
                                    value={this.state.inputs[name] || ''} name={name}>
                                {this.dataForSelect(this.props.departments)}
                            </select>
                        </div>
                    );
                }else {
                    return (
                        <div key={index} className="form-group">
                            <label htmlFor={name}>{label}</label>
                            <select key={index} className="form-control" id={name} onChange={this.handleInputChange}
                                    value={this.state.inputs[name] || ''} name={name}>
                                {this.dataForSelect(this.props.professions)}
                            </select>
                        </div>
                    );
                }
            }
        })
    }
    genericRowForTable(data ){

        return data.map((item, index) =>{
            let id=0;

            let mass = Object.values(item).filter((i)=> {return typeof i !== 'boolean'}).map((item, i) =>{
                if(typeof item === 'number'){
                    id = item;
                }

                if(item !== null && item.name !== undefined ){
                    return (<td key={i}>{item.name}</td>);
                }

                return (<td key={i}>{item}</td>);
            });

            mass.push(<td key={mass.length}><button onClick={(e)=> this.updateRow(e, index)} type="button" className="btn btn-primary">Edit</button></td>,
                <td key={mass.length+1}><button onClick={(e)=> this.deleteRow(e, id)} type="button" className="btn btn-danger">Delete</button></td>);

            return (
                <tr key={index}>
                    {mass}
                </tr>
            );
        });


    }

    render() {
        const {column, data, modalForm} = this.props;
        const columnRes = this.genericHeadRowTable(column);

        const dataResult = this.genericRowForTable(data);

        return(
            <div>
                <Modal show={this.state.show} onHide={()=>this.setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            {this.genericFormForModal(modalForm)}
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>this.setShow(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
                <table className='table table-sm  table-bordered table-primary table-hover'>
                    <thead className="thead-primary">
                    <tr>
                        {columnRes}
                    </tr>
                    </thead>
                    <tbody>
                        {dataResult}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;