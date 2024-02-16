import React, { useState, useEffect } from 'react';
import '../assets/SigninWrapper/Main.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {SigninRequest} from '../axiosConfig';

const clientId = "com.babychakra.alpha1.client";
const scope = "name email";
const redirectURI = "https://tbvpnc.csb.app/";
const state = "origin:web";

const Signin = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSignInSuccess = (event) => {
    // Handle successful response.
    console.log("Success ", event);
    // If needed, you can send the response to your server for authentication
  };

  const handleSignInFailure = (event) => {
    console.log("Error ", event);
  };

  useEffect(() => {
    const initAppleSignIn = () => {
      window.AppleID.auth.init({
        clientId,
        scope,
        redirectURI,
        state,
        usePopup: true
      });

      document.addEventListener("AppleIDSignInOnSuccess", handleSignInSuccess);
      document.addEventListener("AppleIDSignInOnFailure", handleSignInFailure);
    };

    initAppleSignIn();

    return () => {
      document.removeEventListener("AppleIDSignInOnSuccess", handleSignInSuccess);
      document.removeEventListener("AppleIDSignInOnFailure", handleSignInFailure);
    };
  }, []);

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post('/signin', {
        email,
        password,
      });
      console.log('signup button clicked');
      const { data } = response;
      if (data.error) {
        toast.error(data.error);
      } else {
        console.log(email)
        if (email !== 'admin@gmail.com') {
          setData({});
          toast.success('User Sign in Successful.');
          navigate('/device');
      } else {
          setData({});
          toast.success('Admin Sign in Successful.');
          navigate('/admin');
      }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const responseGoogle = (response) => {
    // Handle Google sign-in response
    console.log(response);
    // You can send the response to your server for authentication if needed
  };

  const responseFacebook = (response) => {
    // Handle Facebook sign-in response
    console.log(response);
    // You can send the response to your server for authentication if needed
  };

  return (
    <div className="signin-container">
      <div className="sigin-logo">
        <p className="yaxi-para">YAXI</p>
        <p className="digi-para">Digital signage</p>
      </div>
      <form className="signin-form" onSubmit={loginUser}>
        <input
          className="email"
          type="email"
          name="Email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          className="password"
          type="password"
          name="Password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit" className="sign-button">
          Sign in
        </button>
      </form>

     {/* Apple Sign-In button */}
    

      {/* Google Sign-In button */}
      

      {/* Facebook Sign-In button */}



      <p className="forget-pass">Forget password</p>
      <p className="make-account">Don't have an account?</p>
      <Link to="/signup" className="signup-link">
        Sign up
      </Link>
      <p className="agree-term">
        By clicking Sign in, I agree to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;
        and
      </p>
      <p className="term-condi">Term and Condition</p>
      <p className="privacy">Privacy policy</p>
      <div className="side-image"></div>
    </div>
  );
};

export default Signin;
