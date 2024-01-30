import React from 'react';
import '../assets/SigninWrapper/Main.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='signin-container'>
      <div className='sigin-logo'>
        <p className='yaxi-para'>YAXI</p>
        <p className='digi-para'>Digital signage</p>
      </div>
      <form className='signin-form'>
        <input className='email' text='email' name='Email' placeholder='Email'/>
        <input className='password' text='password' name='Password' placeholder='Password'/>
        <button className='sign-button'>sign&nbsp;in</button>
      </form>
      <p className='forget-pass'>Forget password</p>
      <p className='make-account'>Don't have an account?</p>
      <Link to='/signup' className='signup-link'>Sign&nbsp;up</Link>
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
