import React, {useState, useEffect} from 'react'
import axios from 'axios'

/* This file forces the user to do a spotify authorization. 
*  After a successful authorization, we will redirect to UserAccountCreation.js
*/

function Signup() {
  const spotifyAuthRedirect = (e) =>{
    e.preventDefault()
    window.location.href = "http://localhost:9000/spotifyAuthorize"
  }
   return (
    <>
        {/* TODO: Stylize this later */}
        <h1 className = "page-title"> Sign Up </h1>
        <button onClick = {spotifyAuthRedirect} className = "button"> 
            Spotify Login
        </button>
    </>
   )
  
}

export default Signup