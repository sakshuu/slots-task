import React from 'react'

const SelectSlot = () => {
  return <>
    <div class="container pro">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card">
              <div class="card-header main">Appointment form</div>
              <div class="card-body">
                <div>
                  <label for="email" class="form-label">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <button type="button" class="btn btn-primary w-100 mt-3">
                  Enter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default SelectSlot