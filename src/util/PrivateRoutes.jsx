import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';


// Parent route to child routes (profile/home)
// will use navigate to redirect the user 
const PrivateRoutes = () => {
    // destructing will give use access to user details 
    const {user} = useAuth()
    // Terney operater checks user if true then Outlet compent continues traffic to child componets if false (i.e user not auth) Navigate compoent will send user back to /login page
    return user ? <Outlet /> : <Navigate to='/login'/>
} 

export default PrivateRoutes