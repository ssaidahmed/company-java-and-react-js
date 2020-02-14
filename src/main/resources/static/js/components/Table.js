import  React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.deleteRow = this.deleteRow.bind(this);
        this.updateRow = this.updateRow.bind(this);
        this.genericRowForTable = this.genericRowForTable.bind(this);
        this.genericHeadRowTable = this.genericHeadRowTable.bind(this);

    }
    deleteRow(e){
        e.preventDefault();
        let i = e.target.getAttribute('data-index');

        // this.setState((state)=>({
        //     data: state.data.splice(i, 1)
        // }));

    }

    updateRow(e){
        e.preventDefault();
        e.target.getAttribute('data-id');
    }
    genericHeadRowTable(column){
        return column.map((item, index) =>{
            return(

                <th  key={index} scope="col">{item}</th>

            );
        });
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
        const {column, data} = this.props;
        console.log(data);
        const columnRes = this.genericHeadRowTable(column);

        const dataResult = this.genericRowForTable(data);

        return(
            <div className='container'>

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