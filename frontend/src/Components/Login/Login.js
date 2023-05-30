import React, {useState, useEffect} from 'react'
import "./Login.css"
function Login() {
    // useEffect(() => {
    //     fetch("http://localhost:9000/spotifyAuthorize") 
    //   }, [])
    const CLIENT_ID = "bf5c109cee3b415c9abc7a6c2f017aab"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const REDIRECT_URI= "http://localhost:3000/login"
    const RESPONSE_TYPE = "token"
    // const handleLogin = (e) =>{
    //     e.preventDefault()
        // fetch("http://localhost:9000/spotifyAuthorize") 
        

        // const SCOPES = ["user-top-read"]
        // const SPACE_DELIMITR = "%20"
        // const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITR);
        // window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${clientId}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
        
    // }

    return (
        <>
            <h1>Log into Spotify</h1>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                Login to Spotify
            </a>
            {/* <button onClick = {handleLogin}> Log in </button> */}
        </>
    )
}

export default Login