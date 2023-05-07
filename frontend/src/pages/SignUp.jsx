import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUserAction } from '../redux/actions/UserAction'

const SignUp = () => {

  const { error, registered, loading } = useSelector(state => state.allUsers)
  const actionDispatch = useDispatch()
  const navigate = useNavigate()
  const [userData, setuserData] = useState({
      name: "",
      email: "",
      password: "",
      cpassword: ""
  })
  const registerUser = e => {
      actionDispatch(registerUserAction({...userData}))
      navigate("/login")
  }

  return <>
  <div class="container pro">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
          {error && <div class="alert alert-danger">{error}</div>}
                {registered && <div class="alert alert-success">User Registered Successfully</div>}
                {loading && <div class="spinner-border"></div>}
            <div class="card">
              <div class="card-header">Signup</div>
              <div class="card-body">
                <div>
                  <label for="name" class="form-label">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    value={userData.name}
                    onChange={e => setuserData({ ...userData, name: e.target.value })}
                    id="name"
                    placeholder="Enter your name"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div class="mt-2">
                  <label for="email" class="form-label">First Email</label>
                  <input
                    type="text"
                    value={userData.email}
                    onChange={e => setuserData({ ...userData, email: e.target.value })}
                    class="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div class="mt-2">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="text"
                    class="form-control"
                    value={userData.password}
                    onChange={e => setuserData({ ...userData, password: e.target.value })}
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a password.</div>
                </div>
                <div class="mt-2">
                  <label for="cpassword" class="form-label"
                    >Confirm Password</label
                  >
                  <input
                    type="text"
                    value={userData.cpassword}
                    onChange={e => setuserData({ ...userData, cpassword: e.target.value })}
                    class="form-control"
                    id="cpassword"
                    placeholder="Confirm Your Password"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Please Recheck Your Password.
                  </div>
                </div>
                <button type="button" class="btn btn-primary w-100 mt-3" onClick={registerUser}>
                  Signup
                </button>
                <p class="text-center mt-3">
                  Already Have Account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default SignUp