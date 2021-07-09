import React from 'react';
import PropTypes from 'prop-types';
import { Container, ModalBody } from './styled';

const Modal = ({ children, status, setStatus }) => (
  <Container status={status} onClick={() => setStatus(!status)}>
    <ModalBody onClick={(e) => e.stopPropagation()}>
      {children}
    </ModalBody>
  </Container>
);

Modal.propTypes = {
  children: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default Modal;
