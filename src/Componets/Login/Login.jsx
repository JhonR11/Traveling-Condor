    import '../Login/App.css';
    import axios from 'axios';
    import { FaUserShield } from "react-icons/fa";
    import { GoShieldLock } from "react-icons/go";
    import { AiOutlineSwapRight } from "react-icons/ai";
    import React, { useState, useEffect, useContext} from "react";
    import {useNavigate } from 'react-router-dom';
    import video from '../../Assets/LoginAssets/condor.mp4';
    import logo from  '../../Assets/LoginAssets/CondorLogo.png';
    import { Link} from "react-router-dom";
    import { Usuario } from '../../Models/Usuario';
    import { UserContext } from '../Context/UserContext';
    

    
    const API = 'http://localhost:5285/api/Usuarios/Iniciosesion';

   const Login = () =>{

    const[form, setForm] = useState({
        'correo' : null,
        'contrasenia' : null
    })

    const {setUser} = useContext(UserContext); 
    const [error, setError] = useState(false);
    const [ErrorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const manejadorIniciar = (e) => {
        e.preventDefault();
        axios.post(API, form)
        .then(res => {
            if (res.status === 200) {
                const user = new Usuario(
                  res.data.id,
                  res.data.nombre,
                  res.data.correoElectronico,
                  res.data.contrasenia,
                  res.data.role
                );
                setUser({
                    id: user.id,
                    nombre: user.nombre,
                    role: user.role,
                  });
                console.log("Login successful!");
                navigate("/inicio");
              }
        })
        .catch(error => {
            console.error("Login error:", error);
            setError(true);
            setErrorMsg("Error occurred during login. Please try again.");
        });
    }


 const manejadorState = async e =>{
      await setForm({
          ...form,
          [e.target.name] : e.target.value
      });
      console.log(form);
    }

return(
        <div className="loginPage flex">
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h1 className="title">
                            El Placer al Viajar
                        </h1>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">
                            No tienes una cuenta?, Unetenos
                        </span>
                        <Link to='/register'>
                            <button className="btn">
                                Crear Cuenta
                            </button>
                        </Link>
                    </div>

                </div>
                
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo img"></img>
                        
                    </div>


                    <form action="" className="form grid" onSubmit={manejadorIniciar}>    
                        <div className="inputDiv">
                            <label htmlFor="username">
                                Usuario
                            </label>
                            <div className="input flex">
                                <FaUserShield className="icon">
                                </FaUserShield>
                                <input  
                                placeholder="Ingrese su Correo Electronico"
                                type="text"
                                id="username"
                                name="correo"
                                onChange={manejadorState}/>
            

                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">
                                Contraseña
                            </label>
                            <div className="input flex">
                                <GoShieldLock className="icon">
                                </GoShieldLock>
                                <input 
                                placeholder="Ingrese su contraseña"
                                type="text"
                                id="password"
                                name="contrasenia"
                                onChange={manejadorState}
                                />

                            
                            </div>
                        </div>
                        <Link to='./traveling'>
                        <button type="submit" className="btn flex">
                           <span>
                            Login
                            </span>
                            <AiOutlineSwapRight className="icon"></AiOutlineSwapRight>
                        </button>
                        </Link>
                        
                        <div className="google-login-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                            <button
                                type="button"
                                className="google-login-btn"
                                onClick={() => window.open('https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=http://localhost:3000/google-callback&response_type=token&scope=email profile', '_self')}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    background: '#fff',
                                    border: 'none',
                                    borderRadius: '25px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                    padding: '0.5rem 1.5rem',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    fontWeight: 500,
                                    fontSize: '1rem',
                                    gap: '0.75rem'
                                }}
                                onMouseOver={e => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(66,133,244,0.15)';
                                }}
                                onMouseOut={e => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 48 48">
                                    <g>
                                        <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.8 33.1 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"/>
                                        <path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.2 19.4 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.5 29.6 4 24 4c-7.2 0-13.3 4.1-16.7 10.7z"/>
                                        <path fill="#FBBC05" d="M24 44c5.5 0 10.4-1.8 14.2-4.9l-6.6-5.4C29.7 35.6 27 36.5 24 36.5c-6.1 0-10.8-2.9-13.7-7.2l-7 5.4C7.7 39.9 15.2 44 24 44z"/>
                                        <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.2 3.2-4.2 5.5-7.7 5.5-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3c2.5 0 4.7.9 6.3 2.4l6.1-6.1C38.7 13.1 31.9 10 24 10c-8.8 0-16.3 4.1-20.7 10.7l7 5.1C8.5 31.1 15.4 36 24 36c5.5 0 10.4-1.8 14.2-4.9l-6.6-5.4C29.7 35.6 27 36.5 24 36.5c-6.1 0-10.8-2.9-13.7-7.2l-7 5.4C7.7 39.9 15.2 44 24 44z"/>
                                    </g>
                                </svg>
                                <span style={{ color: '#444' }}>Iniciar sesión con Google</span>
                            </button>
                        </div>

                        <span className="footerDiv flex">
                            Olvidaste tu contraseña? <a href="">Click Here</a>
                        </span>
                    </form>
                </div>
    
            </div>
        </div>
    )
}

export default Login