import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./SignUp.css"
function UserAccountCreation() {
    const [username, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [access_token, setAccessToken] = useState('')


    const getReturnedParamsFromSpotifyAuth = (hash) =>{
        const stringAfterHashtag = hash.substring(1);
        const paramsInUrl = stringAfterHashtag.split("&")
        const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue)=>{
            console.log(currentValue)
            const[key, value] = currentValue.split("=")
            accumulater[key] = value
            return accumulater
        }, {})
        return paramsSplitUp
    }
    useEffect(()=>{
        if (window.location.hash) {
            const {
                access_token,
                expires_in,
                token_type,
            }= getReturnedParamsFromSpotifyAuth(window.location.hash)
            setAccessToken(access_token)
        }
        // This code prevents users from accessing account creation page
        // without first authorizing spotify account
        else{
            window.location.href = "http://localhost:3000/signup"
        }
    },[])        

    const createAccount = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:9000/savetodb", {
                        username:username,
                        password:userPassword,
                        email:userEmail,
                        access_token:access_token,
                    }
        ).then((res)=>{
            if (res.data === "created!"){
                window.location.href = "http://localhost:3000/login"
            }
        })
        // Need to ensure email and password are all valid  
        // Storing entered username and password to local storage to retrieve after url redirect
        // window.addEventListener('beforeunload', function(event) {
        //     window.localStorage.setItem("userName", username);
        //     window.localStorage.setItem("userPassword", userPassword);
        //     window.localStorage.setItem("userEmail", userEmail)
        // })
    }

    // const logout =()=>{
    //     setAccessToken('')
    //     // window.addEventListener('beforeunload')
    //     // window.localStorage.removeItem("access_token");
    //     // window.localStorage.removeItem("userName");
    //     // window.localStorage.removeItem("userPassword");
    //     // window.localStorage.removeItem("userEmail");
    //     window.location.href = "http://localhost:3000/login"   
    // }
    
    // const submit = (e) =>{
    //     e.preventDefault()
    //     axios.post("http://localhost:9000/savetodb", {
    //         // username: window.localStorage.getItem("userName"),
    //         // password: window.localStorage.getItem("userPassword"),
    //         // email: window.localStorage.getItem("userEmail"),
    //         // access_token: window.localStorage.getItem("access_token"),    
    //     })
    // }
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
                    <button className="button"> Sign Up </button>
                </form>
            </div>
        </>
    )
}

export default UserAccountCreation