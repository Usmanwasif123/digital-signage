import React, { useState } from 'react';
import '../assets/SignupWrapper/Main.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {SignupRequest} from '../axiosConfig'

const Navbar = () => {
  const [data, setData] =useState({
    email: '',
    password: '',
   })
  const navigate = useNavigate()
  const SignupUser = async (e) => {
      e.preventDefault();
      const {email, password} = data
      try {
        const {data} = await SignupRequest.post('/signup', {
          email, password
        })
        if(data.error){
          toast.error(data.error)
        } else{
            setData({})
            toast.success('Sign up Successful.')
            navigate('/signin')
        }
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <div className='singup-container'>
      <div className='sigup-logo'>
        <p className='yaxi-para'>YAXI</p>
        <p className='digi-para'>Digital signage</p>
      </div>
      <form className='singup-form' onSubmit={SignupUser}>
      <input className='email' type='email' name='Email' placeholder='Email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        <input className='password' type='password' name='Password' placeholder='Password'  value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit' className='signup-button'>sign&nbsp;up</button>
      </form>
      <p className='make-account'>Already have an account?</p>
      <Link  to='/signin'className='signin-link'>Sign&nbsp;in</Link>
      <p className='agree-term'>By clicking Sigin in I agree to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;
       and
      </p>
      <p className='term-condi'>Term and Condition</p>
      <p className='privacy'>Privacy policy</p>
      <div className='side-image'></div>
    </div>
  )
}

export default Navbar
