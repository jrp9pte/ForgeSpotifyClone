import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./Login.css"


function Login() {
    
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
            window.localStorage.setItem("access_token", access_token);
            setAccessToken(access_token)
        }
    },[])        

    const handleLogin = (e) =>{
        e.preventDefault()
        // Need to ensure email and password are all valid  
        // Storing entered username and password to local storage to retrieve after url redirect
        window.addEventListener('beforeunload', function(event) {
            window.localStorage.setItem("userName", username);
            window.localStorage.setItem("userPassword", userPassword);
            window.localStorage.setItem("userEmail", userEmail)
        })
        window.location.href = "http://localhost:9000/spotifyAuthorize";    
    }

    const logout =()=>{
        setAccessToken('')
        // window.addEventListener('beforeunload')
        window.localStorage.removeItem("access_token");
        window.localStorage.removeItem("userName");
        window.localStorage.removeItem("userPassword");
        window.localStorage.removeItem("userEmail");
        window.location.href = "http://localhost:3000/login"   
        // console.log(window.localStorage.getItem("access_token"))
        // console.log(window.localStorage.getItem("userName"))
        // console.log(window.localStorage.getItem("userPassword"))
        // console.log(window.localStorage.getItem("userEmail"))



    }
    const submit = (e) =>{
        e.preventDefault()
        
        axios.post("http://localhost:9000/savetodb", {
            username: window.localStorage.getItem("userName"),
            password: window.localStorage.getItem("userPassword"),
            email: window.localStorage.getItem("userEmail"),
            access_token: window.localStorage.getItem("access_token"),
            
        })
    }
    return (
        <>
            <h1>Log into Spotify</h1>
            {!access_token ?
            <form onSubmit = {handleLogin} className = "login-form">
                <input
                    type = "text"
                    required
                    placeholder='Enter a Email'
                    
                    value = {userEmail}
                    onChange = {(e) => setUserEmail(e.target.value)}
                />
                <input
                    type = "text"
                    required
                    placeholder='Enter a Username'
                    value = {username}
                    onChange = {(e) => setUserName(e.target.value)}
                />
                <input
                    type = "text"
                    required
                    placeholder='Enter a Password'
                    value = {userPassword}
                    onChange = {(e) => setUserPassword(e.target.value)}
                />
                

                <button> Log in </button>
            </form>
            :
            <> 
            <button onClick={logout}>logout</button>
            <button onClick={submit}>Submit</button>
            </>
            }
        </>
    )
}

export default Login