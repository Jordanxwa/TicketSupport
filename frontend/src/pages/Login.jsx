import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'
import {useSelector, useDispatch} from 'react-redux'
import {login, reset} from'../features/auth/authSlice'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  // Destructure
  const { name, email, password, password2 } = formData

    // Init dispatch
    const dispatch = useDispatch()
    // Init nav
    const navigate = useNavigate()

    // Bring in any global state into component
    const {user, isLoading, isSuccess, message, isError} = useSelector(state => state.auth)

    // Navigate when page loads
    useEffect(() => {
      if(isError){
        toast.error(message)
      } 
  
        // Redirect when logged in
      if(isSuccess || user){
        navigate('/')
      }
      
      dispatch(reset())
    },[isError, isSuccess, user, message, navigate, dispatch])

  // set form data to prev state, select name by the value
  const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }

  // Show spinner if loading
  if(isLoading){
    return <Spinner />
  }

  return (
    <>
    <section className="heading">
      <h1>
        <FaSignInAlt /> Login
      </h1>
      <p>Please log in to get support</p>
    </section>
    <section className="form">
      <form onSubmit={onSubmit}>
       
        <div className="form-group">
          <input type="email" id="email" name='email' className="form-control" value={email}
          onChange={onChange} placeholder='Enter your email' required />
        </div>
        <div className="form-group">
          <input type="password" id="password" name='password' className="form-control" value={password}
          onChange={onChange} placeholder='Enter your password' required />
        </div>
     
        <div className="form-group">
          <button className="btn btn-block" >Submit</button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Login