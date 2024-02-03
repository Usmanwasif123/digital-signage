import React, { useState } from 'react';
import '../assets/SignupWrapper/Main.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3000/signup', {email, password})
      .then(res => {
        navigate('/signin')
      }).catch(err => console.log(err))
  }
  return (
    <div className='singup-container'>
      <div className='sigup-logo'>
        <p className='yaxi-para'>YAXI</p>
        <p className='digi-para'>Digital signage</p>
      </div>
      <form className='singup-form' onSubmit={handleSubmit}>
        <input className='email' text='email' name='Email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <input className='password' text='password' name='Password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <button className='signup-button'>sign&nbsp;up</button>
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
