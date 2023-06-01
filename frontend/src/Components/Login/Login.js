import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Login.css"
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Login() {

    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#d79f88',
                darker: '#053e85',
            },
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
            },
        },
    });

    const [username, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [access_token, setAccessToken] = useState('')
   

    
    const handleLogin = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:9000/login", {
            username:username,
            password: userPassword,
            email: userEmail
        })
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <>
            <div className = "create">
                
                {/* TODO: Fix header to make it ADA friendly later */}
                <h2> Log In </h2>
                <form onSubmit = {handleLogin} >
                    <label>Email:</label>
                    <input
                        type = "email"
                        pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                        required
                        placeholder='Enter a Email'
                        value = {userEmail}
                        onChange = {(e) => setUserEmail(e.target.value)}
                    />
                    <label>Username: </label>
                    <input
                        type = "text"
                        required
                        placeholder='Enter a Username'
                        value = {username}
                        onChange = {(e) => setUserName(e.target.value)}
                    />
                    <label>Password: </label>
                    <input
                        type = "password"
                        minLength= "6"
                        required
                        placeholder='Enter a Password'
                        value = {userPassword}
                        onChange = {(e) => setUserPassword(e.target.value)}
                    />
                    <button className="button"> Log In </button>
                </form>
            </div>
        </>
    )
}

export default Login