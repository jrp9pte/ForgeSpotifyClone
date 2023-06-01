import React, {useState, useEffect} from 'react'
import axios from 'axios'

import "./SignUp.css"
function UserAccountCreation() {
    // const [username, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [access_token, setAccessToken] = useState('')
    const [refresh_token, setRefreshToken] = useState('')


  
       


    const createAccount = async(e) =>{
        e.preventDefault()
        if (window.location.search) {
            // retrieves authorization code from url after redirect from spotifyAuth
            const params = new URLSearchParams(window.location.search);
            const authorizationCode  = (params.get("code"));
            await axios.post("http://localhost:9000/spotifycodes", {
                authorizationcode: authorizationCode,
            }).then((res) => {
                // setRefreshToken()
                // setAccessToken()
                // console.log(res.data.refresh_token)
                // console.log(res.data.access_token)
                axios.post("http://localhost:9000/savetodb", {
                        password:userPassword,
                        email:userEmail,
                        access_token:res.data.access_token,
                        refresh_token:res.data.refresh_token,
                    }
                ).then((res)=>{
                    if (res.data === "created!"){
                        window.location.href = "http://localhost:3000/login"
                    }
                    else { // Need to display to UI that email already exists
                        alert("EMAIL EXISTS ALREADY")
                    }
                })
                // qwerty@gmail.com
            })
            
            
            
        }

        // This code prevents users from accessing account creation page
        // without first authorizing spotify account
        else{
            window.location.href = "http://localhost:3000/signup"
        }
        
    }
    return (
        <>
            
            {/* After successful account creation -> redirect to login page */}
            <div className = "create">
                
                {/* TODO: Fix header to make it ADA friendly later */}
                <h2>Create Account</h2>
                <form onSubmit = {createAccount} >
                    <label>Email:</label>
                    {/* TODO: Make sure account
                              with same email doesn't 
                              already exist in database 
                    */}
                    <input
                        type = "email"
                        // This regex is the best solution for now, still has some edge cases
                        pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                        required
                        placeholder='Enter a Email'
                        value = {userEmail}
                        onChange = {(e) => setUserEmail(e.target.value)}
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
                    <button className="button"> Sign Up </button>
                </form>
            </div>
        </>
    )
}

export default UserAccountCreation