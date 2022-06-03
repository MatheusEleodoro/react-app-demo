import React, { useState } from 'react';
import icon from '../../assets/img/icon.png'
import '../../styles.css';
import {useNavigate} from 'react-router-dom'
import {api} from '../../service/api';

const Login = () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const logar= ()=>{
      api.get('/censos/nomes/matheus')
      .then((e:any)=>{
        if(e.data!=null)
        {
          navigate('/home')
        }
      })
 
  }

  return (
    <div className="container">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="container-login">
        <div className="wrap-login">
          <div className="login-form">

            <span className="login-form-title">
              <a href="https://github.com/MatheusEleodoro" target="_blank">
                <img src={icon} alt="icon" />
              </a>
            </span>

            <span className="login-form-title">Eae meu chapa!</span>
            <span className="login-form-title">vamos logar?</span>

            <div className='wrap-input'>
              <input
                className={email !== "" ? 'has-value input' : 'input'}
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)} />
              <span className="focus-input" data-placeholder='Email' />
            </div>

            <div className='wrap-input'>
              <input
                className={senha !== "" ? 'has-value input' : 'input'}
                type='password'
                value={senha}
                onChange={e => setSenha(e.target.value)} />
              <span className="focus-input" data-placeholder='Senha' />
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={()=>logar()}>Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui acesso?</span>
              <a href="#" className="txt2">Criar conta</a>
            </div>

          </div>
        </div>
        <div className="footer">@eleodoro.dev</div>
      </div>
    </div>
  );

}
export default Login;