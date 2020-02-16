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



    }

    handleSubmit(e){
        e.preventDefault();
        let data = this.state.inputs;

    }

    setShow(boll){
        this.setState({
            show:boll
        })
    }

    deleteRow(e){
        e.preventDefault();
        let id = e.target.getAttribute('data-id');
        this.props.onDeleteRow(id);


    }

    dataForSelect(mass){
        let array = [];
        mass.map((item, index) =>{
            let id = Object.values(item)[0];
            let name = Object.values(item)[1];
            array.push(<option key={index} value={id}>{name}</option>)
        });

        return array;
    };

    handleInputChange(e){
        this.setState({...this.state.inputs, [e.target.name]: e.target.value})
    }
    updateRow(e){
        e.preventDefault();
        let id = e.target.getAttribute('data-index');
        let entity = this.props.data[id];

        this.setShow(true);
        this.props.onUpdateRow(id);
    }

    genericHeadRowTable(column){
        return column.map((item, index) =>{
            return(

                <th  key={index} scope="col">{item}</th>

            );
        });
    }
    genericFormForModal(mass){
        mass.map((item, index) =>{
            let label = Object.values(item)[0];
            let name = Object.values(item)[1];
            let type = Object.values(item)[2];

            if(type === 'input'){
                if(name === 'id'){
                    return <input type="hidden" name="id" onChange = {this.handleInputChange} value = {this.state.inputs[id] || ''}/>
                }
                return(
                    <div className="form-group">
                        <label htmlFor={name}>{label}</label>
                        <input type="text" className="form-control" name={name} onChange = {this.handleInputChange} value = {this.state.inputs[name] || ''}
                               placeholder="Ф.И.О"/>
                    </div>
                );
            }else {
                if(name === 'departmentId') {
                    return (
                        <div className="form-group">
                            <label htmlFor={name}>{label}</label>
                            <select className="form-control" id={name} onChange={this.handleInputChange}
                                    value={this.state.inputs[name] || ''} name={name}>
                                {this.dataForSelect(this.props.departments)}
                            </select>
                        </div>
                    );
                }else {
                    return (
                        <div className="form-group">
                            <label htmlFor={name}>{label}</label>
                            <select className="form-control" id={name} onChange={this.handleInputChange}
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
            let id;

            let mass = Object.values(item).filter((i)=> {return typeof i !== 'boolean'}).map((item, i) =>{
                if(typeof item === 'number'){
                    id = item;
                }

                if(item.name !== undefined ){
                    return (<td key={i}>{item.name}</td>);
                }

                return (<td key={i}>{item}</td>);
            });

            mass.push(<td key={mass.length}><button onClick={this.updateRow} data-id={id} data-index={index} type="button" className="btn btn-primary">Edit</button></td>,
                <td key={mass.length+1}><button onClick={this.deleteRow} data-id={id} data-index={index} type="button" className="btn btn-danger">Delete</button></td>);

            return (
                <tr key={index}>
                    {mass}
                </tr>
            );
        });


    }
    componentDidMount() {

        this.setState({
            data:this.props.data
        });
    }
    render() {
        const {column, data, modalForm} = this.props;
        console.log(data);
        const columnRes = this.genericHeadRowTable(column);

        const dataResult = this.genericRowForTable(data);

        return(
            <div className='container'>
                <Modal show={this.show} onHide={()=>this.setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add employee</Modal.Title>
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

                        </Button>
                    </Modal.Footer>
                </Modal>
                <table className='table table-bordered table-primary table-hover'>
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