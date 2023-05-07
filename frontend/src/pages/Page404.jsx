import React from 'react'
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate= useNavigate()
  return <>
  <div  className='pro main'>
    <div>Page404</div>
    <button type="button" onClick={e => navigate("/")} class="btn btn-primary pro">Back to Home</button>
  </div>
  
  </>
}

export default Page404