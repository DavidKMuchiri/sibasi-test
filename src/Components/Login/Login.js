import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './Login.css';

const Login = () =>{
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    return(
        <div className='loginContainer'>
            <div className='login'>
                <h1>Login</h1>
                <div className='loginEmail'>
                    <input type="text" placeholder='Email' required onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className='loginPassword'>
                    <input type="password" placeholder='Password' required onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <button className={password.length > 7 && isValidEmail(email) ? "enabledButton" : ""} onClick={() => {
                    if(password.length > 8 && isValidEmail(email) ){
                        navigate('/dashboard');
                    }
                }}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login;