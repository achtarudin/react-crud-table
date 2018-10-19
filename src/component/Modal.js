import React from 'react';
import { Modal as Modals } from 'react-bootstrap';

const Modal = (props) => {
  const {show , handleClose, children} = props;
  return(
    <div>
      <Modals show={show} onHide={handleClose}>
        <Modals.Header closeButton>
          <Modals.Title className="text-center">Edit User</Modals.Title>
        </Modals.Header>
        <Modals.Body>
          {children}
          <br/>
          <br/>
        </Modals.Body>
      </Modals>
    </div>
  )
}
export default Modal;