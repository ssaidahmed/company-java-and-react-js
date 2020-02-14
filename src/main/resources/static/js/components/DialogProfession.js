import React from 'react';

class DialogProfession extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){

    }
    handleSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <div className="modal fade" id="editRow">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="modalTitle"> Добавить профессию</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit} className="form-horizontal" name="profession" id="form_add_entity">
                                <input type="hidden" name="id" id="id"/>
                                <div className="form-group">
                                    <label htmlFor="name">Название</label>
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Название"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Описание</label>
                                    <input type="text" className="form-control" name="description" id="description"
                                           placeholder="Описание"/>
                                </div>


                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick="save()">Сохранить</button>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DialogProfession;

