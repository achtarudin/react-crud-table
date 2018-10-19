import React, { Component } from 'react';
import Swal from 'sweetalert2'

import './asset/css/style.css';
import './asset/css/custom.css';
import Data, {Title} from './data/Data'
import AddAccount from './component/AddAccount'
import Table from './component/Table'
import Modal from './component/Modal'
import Form  from './component/Form'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: Title,
      data: Data,
      name: '',
      github: '',
      modal: false,
      editName:'',
      editGithub: '',
      editId: '',
    }    
    this.formOnSubmit = this.formOnSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeGithub = this.onChangeGithub.bind(this);
    this.delete = this.delete.bind(this);

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.formOnEdit = this.formOnEdit.bind(this);
    this.onEditName = this.onEditName.bind(this);
    this.onEditGithub = this.onEditGithub.bind(this);
  }

  handleClose() {
    this.setState({ modal: false });
  }

  handleShow(id) {
    const {data} = this.state;
    const edit = [...data];
    const search = edit.filter(search => search.id === id);
    search.map((result) => this.editUser(result));
    this.setState({ modal: true });
  }

  editUser(result){
    this.setState({editId:result.id, editName: result.name, editGithub: result.github})
  }

  formOnEdit(event){
    const {editName, editGithub, editId} = this.state;
    const data = {
      id: editId,
      name: editName,
      github: editGithub
    }
    const result = [...this.state.data];
    result[editId] = data;
    this.setState({ data: result });
    event.preventDefault();
    this.setState({ modal: false });
    Swal({
      position: 'top-end',
      type: 'success',
      title: 'Your customer has been changes',
      showConfirmButton: false,
      timer: 1500
    })
  }

  onEditName(event){
    this.setState({ editName: event.target.value });
  }

  onEditGithub(event) {
    this.setState({ editGithub: event.target.value });
  }
  
  formOnSubmit(event){
    const {name, github} = this.state
    const id = this.state.data.length;
    if(name !== ""){
      if(github !== ""){
        this.addUSer(id, name, github);
        console.log(this.state.data)
        Swal(
          'Good job!',
          'You added new user!',
          'success'
        )
      }
      else{
        Swal({
          type: 'error',
          title: 'Oops...',
          text: ' Github name is empty!'
        })
      }
    }
    else{
      Swal({
          type: 'error',
          title: 'Oops...',
          text: 'Name is empty!'
        })
    }
    event.preventDefault();
  }

  addUSer(id, name, github){
    var data = [{
      id: id,
      name: name,
      github: github
    }]
    var update = [...this.state.data, ...data]
    this.setState({data: update});
    this.clearInput()
  }
  clearInput() {
    this.setState({ name: "", github: "" });
  }

  onChangeName(event){
    this.setState({ name: event.target.value });
  }

  onChangeGithub(event){
    this.setState({ github: event.target.value });
  }

  getValidateName(){
    const length = this.state.name.length;
    if (length > 1) return 'success';
    else if (length > 0) return 'error';
    return null;
  }

  getValidateGithub() {
    const length = this.state.github.length;
    if (length > 1) return 'success';
    else if (length > 0) return 'error';
    return null;
  }

  delete(id){
    const deleteData = [...this.state.data];
    deleteData.splice(id, 1);
    this.setState({data: deleteData})
  }
  render() {
    const { title, 
      data, 
      name, 
      github, 
      modal,
      editName, 
      editGithub} = this.state;
    return (
      <div>
        <AddAccount title={title}>
          <Form
            formOnSubmit={this.formOnSubmit}
            getValidateName={this.getValidateName()}
            name={name}

            onChangeName={this.onChangeName}
            getValidateGithub={this.getValidateGithub()}
            github={github}
            onChangeGithub={this.onChangeGithub}
            nameButton="Add" />
        </AddAccount>
        <br/>

          <Table 
            data={data}
            clickEdit={this.handleShow}
            clickDelete={this.delete}>
          </Table>

          <Modal 
            show={modal}
            handleClose={this.handleClose}>
            <Form
              nameButton="Save"
              formOnSubmit={this.formOnEdit}
              name={editName}
              onChangeName={this.onEditName}

              github={editGithub}
              onChangeGithub={this.onEditGithub}/>
          </Modal>
          <br/>
          <br/>
        <div className="footer text-center">
          <a href="https://github.com/achtarudin/react-crud-table" className="btn btn-lg" role="button">            
            <span className="glyphicon glyphicon-barcode" aria-hidden="true"></span>
          </a>
        </div>
        <br/>
        <br />
        <br />
      </div>
    );
  }
}

export default App;
