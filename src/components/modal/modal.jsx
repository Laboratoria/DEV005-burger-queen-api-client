import PropTypes from "prop-types";
import "./modal.css";

const Modal = ({ children, close, title }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close-btn' onClick={close}>
          &times;
        </span>
        <h2>{title}</h2>
        <div className='line'></div>
        <div className='contentModal'>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
