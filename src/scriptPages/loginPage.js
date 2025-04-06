import '../styles/login.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () =>{

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    // Lógica de autenticação simples (para testes)
    if (username === 'usuario' && password === 'senha') {
      navigate('/home')
    } else {
      alert('Credenciais inválidas')
    }
  };
    return(
        <div className="conteiner">

            <form onSubmit={handleSubmit} className="form" data-qa="form">
                <div className='name'>Login</div>
                <div className="username">
                <label>Username</label>
                <input type="text" data-qa="username" value={username}className="inputusername" name="username" placeholder="username.." onChange={(e) => setUsername(e.target.value) }/> 
                </div>
                <div className="password">
                <label>Password</label>
                <input type="password" data-qa="password" value={password} className="inputPassword" name="password" placeholder="password.." onChange={(e) => setPassword(e.target.value)}/>
                </div>              
                
                <input  className="login" type="submit" value="Login" />

                <div>
                    <span>username : usuario</span>
                    <span>Password : senha</span>
                </div>
            </form>

        </div>
    )

}
export default Login