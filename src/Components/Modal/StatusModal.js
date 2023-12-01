import React from 'react'

const StatusModal = ({userId,show, handleClose }) => {

  return (
    <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" id={`activeInactive-${userId}`} 
aria-labelledby={`activeInactive-${userId}`} style={{ display: show ? 'block' : 'none' }}>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">CHANGE STATUS</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
            <div className="btn-group" role="group" aria-label="User Status">
              <button type="button" className="btn btn-outline-success">
                <i className="fas fa-check-circle"></i> Active
              </button>
              <button type="button" className="btn btn-outline-danger">
                <i className="fas fa-pause-circle"></i> Suspended
              </button>
              <button type="button" className="btn btn-outline-secondary">
                <i className="fas fa-lock"></i> Locked
              </button>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default StatusModal