import React, { useState } from 'react';
import icon from './assets/img/icon.png';
import './styles.css';

function App() {

  const[email,setEmail] = useState('')
  const[senha,setSenha] = useState('');


  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            
          <span className="login-form-title">
              <img src={icon} alt="icon" />
            </span>

            <span className="login-form-title">Eae meu chapa!</span>
            <span className="login-form-title">vamos logar?</span>
            
            <div className='wrap-input'>
              <input 
               className={email !== ""? 'has-value input':'input'} 
               type='email'
               value={email}
               onChange={e=>setEmail(e.target.value)}/>
              <span className="focus-input" data-placeholder='Email'/>
            </div>

            <div className='wrap-input'>
              <input 
              className={senha !== ""? 'has-value input':'input'} 
              type='password'
              value={senha}
              onChange={e=>setSenha(e.target.value)}/>
              <span className="focus-input" data-placeholder='Senha'/>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui acesso?</span>
              <a href="#" className="txt2">Criar conta</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
