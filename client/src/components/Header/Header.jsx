// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const navigate = useNavigate();


    const logIn = () =>{
        navigate('/login')
      }
    return (
        <div className=''>
            <nav className="navbar navbar-light fixed-top navbarr ">
                <div className="container-fluid " >
                    <span className="header">
                    <Link to={'/'} style={{textDecoration:"none" , color:"white"}}>
                        <img src="/moviez.png" className='logo' alt="MoviezApp Logo" />
                        MoviezApp
                    </Link>
                    </span>
                    d
                    <button className="button1" type="submit" onClick={logIn}>Sign up / Login</button>
                </div>
            </nav>
        </div>
    )
}
