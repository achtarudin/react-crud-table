import React from 'react';
import { Button, FormControl, FormGroup, InputGroup } from 'react-bootstrap';

const Form = (props) =>{
  const { name, github, 
    formOnSubmit, 
    getValidateName = null, 
    getValidateGithub = null,
    onChangeName,
    onChangeGithub,
    nameButton } = props;
  return(
    <div>
      <form onSubmit={formOnSubmit}>
        <FormGroup validationState={getValidateName}>
          <InputGroup >
            <InputGroup.Addon>Name</InputGroup.Addon>
            <FormControl
              type="text"
              value={name}
              onChange={onChangeName} />
          </InputGroup>
        </FormGroup>

        <FormGroup validationState={getValidateGithub}>
          <InputGroup>
            <InputGroup.Addon>https://github.com/</InputGroup.Addon>
            <FormControl
              type="text"
              value={github}
              onChange={onChangeGithub} />
          </InputGroup>
        </FormGroup>

        <div className="pull-right">
          <Button bsSize="sm" type="submit">{nameButton}</Button>
        </div>
      </form>
    </div>
  )
}
export default Form;
