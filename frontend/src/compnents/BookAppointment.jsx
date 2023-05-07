import React, { useEffect } from 'react'
import {useDispatch, useSelector   }from "react-redux";
import { getSlotsAction } from '../redux/actions/SlotsActions';

const BookAppointment = () => {
const dispatch = useDispatch()
const { slot} = useSelector(state => state.allSlots)
useEffect(() => {
  dispatch(getSlotsAction())
}, [])

  return <>
 

  <div className="container main-box pro">
<table class="table table-dark ">
  <thead>
    <tr>
      <th scope="col" className='main'>1st Slot</th>
      <th scope="col" className='main'>2nd Slot</th>
      <th scope="col" className='main'>3rd Slot</th>
      <th scope="col" className='main'>4th Slot</th>
      <th scope="col" className='main'>5th Slot</th>
      <th scope="col" className='main'>Booked</th>
    </tr>
  </thead>
  <tbody>
    {
      slot.map(item => <>
        <tr>
          <td className='box'>{item.firstTimeSlot}</td>
          <td className='box'>{item.secondTimeSlot}</td>
          <td className='box'>{item.thirdTimeSlot}</td>
          <td className='box'>{item.fourthTimeSlot}</td>
          <td className='box'>{item.fifthTimeSlot}</td>
          <td> 
            <button type="button" class="btn btn-primary" onClick={e => handleClick()}>Confirm</button>
          </td>
        </tr>
      
      </>)
    }
  </tbody>
</table>
  </div>

  <div className='main pro-bottom color-present'>
  <span id='box-Available'></span> <label>Available</label>
  <span id='box-Selected'></span> <label>Selected</label>
  <span id='box-Booked'></span> <label>Booked</label>
</div>
  </>

}

export default BookAppointment