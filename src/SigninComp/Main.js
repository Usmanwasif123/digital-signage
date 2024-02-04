import React, { useState } from 'react';
import '../assets/SigninWrapper/Main.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-hot-toast';

const Navbar = () => {
 const [data, setData] =useState({
  email: '',
  password: '',
 })
  const navigate = useNavigate()


  const loginUser = async (e) =>{
    e.preventDefault()
    const {email, password} = data
    try {
      const {data} = await axios.post('/signin',{
        email, password
      });
      if(data.error){
        toast.error(data.error)
      } else {
        setData({});
        navigate('/device')
      }
    } catch (error) {
      
    }
  }

  return (
    <div className='signin-container'>
      <div className='sigin-logo'>
        <p className='yaxi-para'>YAXI</p>
        <p className='digi-para'>Digital signage</p>
      </div>
      <form className='signin-form' onSubmit={loginUser}>
        <input className='email' type='email' name='Email' placeholder='Email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        <input className='password' type='password' name='Password' placeholder='Password'  value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <Link to='/device'><button type='submit' className='sign-button'>sign&nbsp;in</button></Link>
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
