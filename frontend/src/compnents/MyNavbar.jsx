import React from 'react'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
  return <>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <Link class="navbar-brand" to="/">Book Appointment</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-link active" to="/login">Login</Link>
          <Link class="nav-link" to="/signup">Sign-Up</Link>
          {/* <Link class="nav-link" href="#">Pricing</Link> */}
        </div>
      </div>
    </div>
  </nav>
  </>
}

export default MyNavbar