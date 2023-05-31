import React, {useState, useEffect} from 'react'
import "./Login.css"
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

function Login() {
   
    useEffect(()=>{
        if (window.location.hash) {
            const {
                access_token,
                expires_in,
                token_type,
            }= getReturnedParamsFromSpotifyAuth(window.location.hash)
        }
    })        

    const handleLogin = (e) =>{
        e.preventDefault()
        window.location.href = "http://localhost:9000/spotifyAuthorize";    
    }


    return (
        <>
            <h1>Log into Spotify</h1>
            {/* <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                Login to Spotify
            </a> */}
            <button onClick = {handleLogin}> Log in </button>
        </>
    )
}

export default Login