import {Navigate, Outlet} from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'
import Spinner from './Spinner'

const PrivateRoute = () => {
const {loggedIn, checkingStatus} = useAuthStatus()

// Show spinner if status is loading
if(checkingStatus){
  return <Spinner />
}

  return (
    loggedIn ? <Outlet /> : <Navigate to='/login'/>
  )
}

export default PrivateRoute