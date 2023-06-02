import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Button from "@mui/material/Button"
import { theme } from '../Login/Login'
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
        <h1 > Sign Up for SpotifySocial</h1>
        {/* <button onClick = {spotifyAuthRedirect} className = "button"> 
            Spotify Login
       </button> */}
       <h2>Harmonize Your World: Connect, Share, and Groove!</h2>
       <div style={{ display: "flex", justifyContent: "center", marginTop: "2REM", marginBottom: "2REM" }}>
         <ThemeProvider theme={theme}>
           <Button variant="contained" size='large' onClick={spotifyAuthRedirect}>
             Login to Spotify
           </Button>
         </ThemeProvider>
         
       </div>
       <h3>Please log in to your Spotify account to connect with SpotifySocial.</h3>
    </>
   )
  
}

export default Signup