import React, { useState } from 'react';
import '../assets/SigninWrapper/Main.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/signin', {email, password})
    .then(res => {
      console.log(res.data)
      if(res.data.Status === "Success"){
        navigate('/device')
      } else{
        navigate('/signin')
      }
    }).catch(err => console.log(err))
}
  return (
    <div className='signin-container'>
      <div className='sigin-logo'>
        <p className='yaxi-para'>YAXI</p>
        <p className='digi-para'>Digital signage</p>
      </div>
      <form className='signin-form' onSubmit={handleSubmit}>
        <input className='email' text='email' name='Email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <input className='password' text='password' name='Password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <Link to='/device'><button className='sign-button'>sign&nbsp;in</button></Link>
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
