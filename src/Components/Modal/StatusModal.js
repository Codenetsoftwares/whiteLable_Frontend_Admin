import React, { useState } from 'react';

const StatusModal = ({ userId, show, handleClose }) => {
  const [activeStatus, setActiveStatus] = useState({
    isActive: true,
    lock: false,
  });

  const handleButtonClick = () => {
    setActiveStatus({ ...activeStatus, isActive: !activeStatus.isActive });
  };

  const handleButtonChange = () => {
    setActiveStatus({ ...activeStatus, lock: !activeStatus.lock });
  };

  const renderButtons = () => {
    return (
      <>
        <button type="button" className="btn btn-outline-secondary mx-2" onClick={handleButtonClick}>
          {activeStatus.isActive ? 'Active' : 'Inactive'}
        </button>
        <button type="button" className="btn btn-outline-danger mx-2" onClick={handleButtonChange}>
          {activeStatus.lock ? 'Unlock' : 'Lock'}
        </button>
      </>
    );
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" id={`activeInactive-${userId}`} aria-labelledby={`activeInactive-${userId}`} style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">CHANGE STATUS</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">{renderButtons()}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              CHANGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
