/* eslint-disable react/no-unescaped-entities */
// import React from 'react';

import { useNavigate } from "react-router-dom"

export default function Register() {
    const navigate = useNavigate();


    const login = () =>{
        navigate('/login')
      }
    return (    
        <section className="h-100 gradient-form overflow-hidden" >
            <div className="container py-4">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-4">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-12">
                                    <div className="card-body p-md-5 mx-md-4">

                                        <div className="text-center">
                                            <img src="/moviez.png"
                                                style={{ width: '155px' }} alt="logo" />
                                            <h1 className="mt-1 mb-5 pb-1 fw-bolder">MoviezApp</h1>
                                        </div>

                                        <form>
                                            <h4 className="text-center fw-bold">Register to your account</h4>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form2Example11">Username</label>
                                                <input type="email" id="form2Example11" className="form-control"
                                                    placeholder="Phone number or email address" />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form2Example22">Password</label>
                                                <input type="password" id="form2Example22" className="form-control" placeholder="Password" />
                                            </div>

                                            <div className="d-flex align-items-center justify-content-center">
                                                <p className="mb-0 me-3">Already have an account?</p>
                                                <button type="button" className="button2" onClick={login}>Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

