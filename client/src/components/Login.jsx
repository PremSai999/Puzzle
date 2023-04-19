import React, { useState,useEffect } from 'react';
import axios from 'axios';
import "../css/login.css"
import {useNavigate} from 'react-router-dom'

function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLogin){
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            if (response.data.success) {
              console.log(response);
              navigate("/home");
            } else {
              alert("Wrong Email or Password")
            }
          } catch (error) {
            console.error(error);
          }
          return;
    }
    try {
        const response = await axios.post('http://localhost:3000/signup', { email, password });
        if (response.data.success) {
            alert("Successful signup.")
            setIsLogin(!isLogin)
        } else {
          alert("Something went wrong. please try again")
        }
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div className='logForm'>
    <h1 >{isLogin ? "Login" : "Signup"}</h1>
    <form onSubmit={handleSubmit}>
       <div><label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='Enter Email'
          required
        />
      </label></div> 
      <div><label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='Enter Password'
          required
        />
      </label>
      </div> 
      <div><button type="submit">{isLogin ? "Login" : "Signup"}</button></div>
      OR
    </form>
    <div><button onClick={()=>setIsLogin(!isLogin)}>{!isLogin ? "Login" : "Signup"}</button></div>
    </div>
    
  );
}

export default LoginForm;