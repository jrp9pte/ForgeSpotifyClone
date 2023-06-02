import React, {useState} from 'react'
import Popups  from "./Popup.js"
function Logout() {
    const [buttonPopup, setButtonPopup] = useState(false)
    const confirmationLogout = (e) =>{
        e.preventDefault()
        setButtonPopup(true)
    }
    

    const finalLogout = (e) =>{
        console.log(window.localStorage.getItem("currentUserAT"))
        console.log(window.localStorage.getItem("currentUserUID"))
        window.localStorage.removeItem("currentUserAT")
        window.localStorage.removeItem("currentUserUID")
        window.location.href = "http://localhost:3000"
        e.preventDefault()
    }

    return (
        <>
            <button onClick = {confirmationLogout}> Log Out </button>
            <Popups trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h1> 
                        Are you sure you want to log out?
                    </h1>
                    <button className="logout" onClick={finalLogout}>
                        Logout
                    </button>
            </Popups>
        </>
    )
}

export default Logout