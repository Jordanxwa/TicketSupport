import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {login} from'../features/auth/authSlice'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  // Destructure
  const { name, email, password, password2 } = formData

    // Init dispatch
    const dispatch = useDispatch()

    // Bring in any global state into component
    const {user, isLoading, isSuccess, message} = useSelector(state => state.auth)

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