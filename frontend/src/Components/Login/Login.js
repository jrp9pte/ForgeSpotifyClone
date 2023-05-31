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
    const SCOPES = ["user-top-read"]
    const SPACE_DELIMITR = "%20"
    const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITR);
    const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize"
    const REDIRECT_URI= "http://localhost:3000/login"
    useEffect(()=>{
        if (window.location.hash) {
            const {
                access_token,
                expires_in,
                token_type,
            }= getReturnedParamsFromSpotifyAuth(window.location.hash)
            
        }
    })

    const handleLogin = async(e) =>{
        e.preventDefault()
        await fetch("http://localhost:9000/spotifyAuthorize")
        .then((res)=>res.text())
        .then((data)=>{
            console.log(data)
            window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${data}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;    
        }) 

        
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