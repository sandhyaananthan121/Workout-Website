"use client";

import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import {Button} from "@nextui-org/button";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://workout-website-rqt9.onrender.com:8000/auth', {
                username: registerUsername,
                password: registerPassword,
            });
            login(registerUsername, registerPassword);
        } catch (error) {
            console.error('Failed to register user:', error);
        }
    };

    return (
        <div className="container mt-5 w-32 d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex justify-content-center mb-4">
                <Button className={`btn ${isLogin ? 'btn-default' : 'btn-secondary'} me-2`} variant="flat" onClick={() => setIsLogin(true)}>Login</Button>
                <Button className={`btn ${!isLogin ? 'btn-default' : 'btn-secondary'}`} variant= "flat" onClick={() => setIsLogin(false)}>Sign Up</Button>
            </div>

            {isLogin ? (
                
                <div className="box p-4 w-50 ">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2 mt-4">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <Button type="submit" className="w-100 btn btn-primary">Login</Button>
                    </form>
                </div>
            ) : (
                <div className="box p-4 w-50">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-2 mt-4">
                            <label htmlFor="registerUsername" className="form-label">Username</label>
                            <input type="text" className="form-control" id="registerUsername" value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="registerPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="registerPassword" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} required />
                        </div>
                        <Button type="submit" className="w-100 btn btn-primary" >Register</Button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;
