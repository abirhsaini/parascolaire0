import React from 'react';
import logo from "../images/logo2.png"
import "../style/login.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";



const Login = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/Allclubs");
    }
    const register =()=>{
        console.log("kk")
        axios.post('http://localhost:3001/login',{
        email:email,
        password:password,
        member:member
    })
    }
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [member, setmember] = useState("");


    return (
        <div><img className='imgg' src={logo} alt="logo" />
            <div className='ligne'>
                <hr id='hr' className='hrone' width="300px" />
                <h1 >LOGIN</h1>
                <hr className='hrtwo' width="300px" />

            </div>
            <input type="text" className='input' value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Email or mobile number' />
            <input type="password" className='input' value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='password' />
            <select value={member} onChange={(e)=>{setmember(e.target.value)}} id="monselect">
                <option >membre normal</option>
                <option  selected>member of BDE</option>
                <option >team of club</option>
            </select>
            <p>forgot password?</p>
           <a href="/Allclubs"><button  className='input' onClick={register}>LOGIN</button></a>
        </div>
    );
};

export default Login;