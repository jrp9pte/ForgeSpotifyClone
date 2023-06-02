import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import "./Login.css"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { UserContext } from "./UserProvider"


const theme = createTheme({
	status: {
		danger: "#e53e3e",
	},
	palette: {
		primary: {
			main: "#d79f88",
			darker: "#053e85",
		},
		neutral: {
			main: "#64748B",
			contrastText: "#fff",
		},
	},
})

function Login() {
	const { user, setUser } = useContext(UserContext)
	useEffect(()=>{
		if (window.localStorage.getItem("currentUserAT") || window.localStorage.getItem("currentUserUID")){
			window.location.href="http://localhost:3000/discover"
		}
	})
	const theme = createTheme({
		status: {
			danger: "#e53e3e",
		},
		palette: {
			primary: {
				main: "#d79f88",
				darker: "#053e85",
			},
			neutral: {
				main: "#64748B",
				contrastText: "#fff",
			},
		},
	})

	const [username, setUserName] = useState("")
	const [userPassword, setUserPassword] = useState("")
	const [userEmail, setUserEmail] = useState("")
	const [access_token, setAccessToken] = useState("")

	const handleLogin = (e) => {
		e.preventDefault()
		axios.post("http://localhost:9000/login", {
				// username: username,
				password: userPassword,
				email: userEmail,
			})
			.then((res) => {
				console.log(res.data.access_token)
				console.log(res.data.uid)
				const userData = res.data
				axios.post("http://localhost:9000/GetUsername",{
					access_token: res.data.access_token
				}).then((res)=>{
					const username = res.data.profile.display_name
					axios.post("http://localhost:9000/SetUsername",{
						username: username,
						email: userEmail,
						password: userPassword,
					})
				})
				// console.log("AT",res.data.access_token)
				window.addEventListener('beforeunload', function(event) {
					window.localStorage.setItem("currentUserAT", res.data.access_token);
					window.localStorage.setItem("currentUserUID", res.data.uid);
					window.localStorage.setItem("docid", res.data.docid);
				})
				// console.log("AT2",window.localStorage.getItem("currentUserAT"))
				window.location.href = "http://localhost:3000/profile"
				//Store data then redirect to homepage to local storage
				// when res.data is not undefined
				// window.location.setItem("currentUserUid", res.data.uid)
				// setUser(userData)
			})
	}
	const [showPassword, setShowPassword] = useState(false)

	const handleClickShowPassword = () => setShowPassword((show) => !show)

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	return (
		<>
			<h1>Log into SpotifySocial</h1>
			<h3>Harmonize Your World: Connect, Share, and Groove!</h3>
			{/* _______ */}
			<form onSubmit={handleLogin}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						// marginBottom: "10px",
						marginTop: "40px",
					}}
				>
					<Box style={{ width: "250px" }}>
						<TextField
							variant="outlined"
							id="Spotify-email-address"
							name="email"
							type="email"
							required
							label="Email Address"
							fullWidth
							// value={userEmail}
							onChange={(e) => setUserEmail(e.target.value)}
						/>
					</Box>
				</div>
				
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginBottom: "10px",
					}}
				>
					<Box style={{ width: "250px", marginTop:"1REM"}}>
						<FormControl sx={{ width: "100%" }} variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">
								Password
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								required
								fullWidth
								// value={userPassword}
								onChange={(e) =>
									setUserPassword(e.target.value)
								}
								type={showPassword ? "text" : "password"}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{showPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>
					</Box>
				</div>
				<div style={{ display: "flex", justifyContent: "center" , margin:"1.5REM"}}>
					<ThemeProvider theme={theme}>
						<Button variant="contained" onClick={handleLogin} size="large">
							Login
						</Button>
					</ThemeProvider>
				</div>
				<a href="http://localhost:3000/signup" >Don't have an account? Sign Up here.</a>
			</form>
		</>
	)
}

export default Login
export { theme };