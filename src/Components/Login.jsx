import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { mygithubsavedata } from '../Redux/Action_creator';

const Login = ({setlogincheck}) => {

    const dispatch = useDispatch()
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [profiledata , setprofiledata] = useState({});

    // check details
    function check_details() {
        if (email != "" && password != "") {
            alert("Login Successful");
            return true;
        }
        else {
            alert("all details");
            return false;
        }
    }
    // profile send data
    const profilesenddata = async()=>{
        check_details();
        if( check_details() == false){
            setlogincheck(false)
        }
        else{
        const res = await fetch(`https://api.github.com/users/${email}`)
        const data = await res.json()
        setprofiledata(data)
       
        dispatch(mygithubsavedata(data))
         setlogincheck(true)
        }
    }

     // login form design 
  return (
    <section >
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center w-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image" />
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address"  onChange={(e)=>{setemail(e.target.value)}}/>
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" onChange={(e)=>{setpassword(e.target.value)}}/>
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"
              style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}} onClick={profilesenddata}>Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    {/* <!-- Copyright --> */}
    <div class="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
    {/* <!-- Copyright -->

    <!-- Right --> */}
    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
    {/* <!-- Right --> */}
  </div>
</section>
  )
}

export default Login

