import React from 'react';
import '../assets/SignupWrapper/Main.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='singup-container'>
      <div className='sigup-logo'>
        <p className='yaxi-para'>YAXI</p>
        <p className='digi-para'>Digital signage</p>
      </div>
      <form className='singup-form'>
        <input className='email' text='email' name='Email' placeholder='Email'/>
        <input className='password' text='password' name='Password' placeholder='Password'/>
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
