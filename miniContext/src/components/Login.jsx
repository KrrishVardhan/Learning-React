import React, {useState, useContext} from 'react'
// here we use the useContext hook after all the setup
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const Login = () => {
        setUser({username, password})
    }
  return (
    <div className="form-container">
      <input 
        type="text" 
        id='username' 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'
        className="form-input"
      />
      <input 
        type="password" 
        id='password' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'
        className="form-input"
      />
      <button onClick={Login}>Login</button>
    </div>
  )
}

export default Login