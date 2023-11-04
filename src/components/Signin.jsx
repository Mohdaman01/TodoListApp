import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const container = {
  "position": "absolute",
  "top": "20%",
  "left": "30%"
}

const form = {
  "padding": "1rem",
  "font-size": "1.2rem"
}

const heading = {
  "margin" : "1rem 0"
}

const inputContainer = {
  "margin" : "1rem 0"
}

const input1 = {
  "margin" : "0 1rem",
  "padding-left" : ".5rem", 
}

const input2 = {
  "margin" : "0 3.3rem",
  "padding-left" : ".5rem", 
}

const submit = {
  "width" : "8rem",
  "height" : "3rem",
  "margin-top": "1rem",
}


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  if (error !== "") {

    alert(error);
    setError("");

  }

  return (
    <div style={container} >
      <div>
        <h1 style={heading} >Sign in to your account</h1>
        <p>
          Don't have an account yet?{' '}
          <Link to='/signup' className=''>
            Sign up.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit} style={form} >
        <div style={inputContainer}>
          <label>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} style={input1} type='email' required />
        </div>
        <div style={inputContainer}>
          <label >Password</label>
          <input onChange={(e) => setPassword(e.target.value)} style={input2} type='password' required />
        </div>
        <input type="submit" value="SignIn" style={submit} />
      </form>
    </div>
  );
};

export default Signin;
