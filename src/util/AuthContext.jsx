import { useContext, useState, useEffect, createContext} from "react";
import { account } from "../appwriteConfig";
import { ID } from "appwrite";


const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        checkUserStatus()

    }, [])

    const loginUser = async (userInfo) => {
        setLoading(true)
        try {
            let response = await account.createEmailSession(
                userInfo.email,
                userInfo.password
            )
            let accountDetails = await account.get()
            setUser(accountDetails)
        } catch(error) {
            console.error(error)
        }
        setLoading(false)
    }

    const logoutUser = () => {
        account.deleteSession('current')
        setUser(null)
    }

    const registerUser = async (userInfo) => {
        setLoading(true)

        try {
            let resposne = await account.create(
                ID.unique(),
                userInfo.email,
                userInfo.password1, 
                userInfo.name
            )

            await account.createEmailSession(
                userInfo.email,
                userInfo.password1
            )
            let accountDetails = await account.get()
            setUser(accountDetails)
        } catch(error) {
            console.error(error)
        }

        setLoading(false)
    }

    const checkUserStatus = async () => {
        try {
            let accountDetails = await account.get()
            setUser(accountDetails)
        } catch(error) {
            console.error(error)
        }
        setLoading(false)
    }

    const contextData = {
         // object with a state
        user,
        loginUser,
        logoutUser,
        registerUser
    }

    return (

        <AuthContext.Provider value={contextData}>
            {/* loading first to do check and then children will load */}
            {loading ? <p>Loading...</p> : children} 
        </AuthContext.Provider>

    )
}

export const useAuth = () => {return useContext(AuthContext)}
export default AuthContext
