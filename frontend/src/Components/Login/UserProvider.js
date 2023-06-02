import React, { createContext, useState } from "react"

export const UserContext = createContext()

export default ({ children }) => {
	const [user, setUser] = useState({access_token: window.localStorage.getItem("currentUserAT"), uid: window.localStorage.getItem("currentUserUID"), docid: window.localStorage.getItem("docid")})

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}
