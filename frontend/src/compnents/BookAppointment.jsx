import React from 'react'

const BookAppointment = () => {

const handleClick = () => {
  
}

  return <>
  <div className="container main-box pro">
<table class="table  table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Time Slots</th>
      <th scope="col">Booked</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>10:00 AM to 11:00 AM</td>
      <td> 
        <button type="button" class="btn btn-primary" onClick={e => handleClick()}>Confirm</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
  </>
}

export default BookAppointment