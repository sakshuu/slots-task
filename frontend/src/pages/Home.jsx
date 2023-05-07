import React from 'react'
import SelectSlot from '../compnents/SelectSlots'
import BookAppointment from '../compnents/BookAppointment'

const Home = () => {
  return <>
  <h3 className='main pro'>Book The Appointment</h3>
  <SelectSlot/>
  <BookAppointment/>
  </>
}

export default Home