import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSlotsAction } from '../redux/actions/SlotsActions'

const SelectSlot = () => {
  const dispatch = useDispatch()
const { slot} = useSelector(state => state.allSlots)

const [dataSlots, setDataSlots] = useState({})
const [slotName, setSlotName] = useState({
  name:""
})

const handleName = (item) => {
  if (dataSlots(item.name) === slotName) {
    return `<p>is avilable to show fllowing table slot</p>`
  } else {
    return `<p>is not</p>`
  }
}

useEffect(() => {
  dispatch(getSlotsAction())
  setDataSlots(slot)
}, [])

  return <>
  {/* {JSON.stringify(dataSlots)} */}
 
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
                    placeholder="Enter name" onChange={e => {handleName()
                    setDataSlots(item)
                    }}
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