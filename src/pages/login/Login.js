import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import {  Wave } from 'react-animated-text'
// styles
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    
    <form onSubmit={handleSubmit} className={styles['login-form']}>
     
      <h4> <Wave  text="follow Your Expanses" /></h4>
      <h2>login</h2>
      <label>
        <span>email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
      </label>
      { !isPending && <button className="btn">Login</button> }
      { isPending && <button className="btn" disabled>loading</button> }
      { error && <p>{error}</p> }
      <footer>
    <p className={styles.footer}>$ My Money helps you to keep track with your expanses $</p>
    </footer>
    </form>
    
    
  )
}
