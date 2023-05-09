import React, { useEffect, useState } from 'react';
import './Nav.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import LandingDash from '../LandingDash/LandingDash';
import NewPayment from '../NewPayment/NewPayment';
import ViewPayments from '../Payments/ViewPayments';
import logo from '../../../assets/AppleHolidays.png';



function Nav(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className='nav__Div'>
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                <NavLink className="navbar-brand" to="main__">PAYMENT PORTAL</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarScroll">
                                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" to="main__"> Dashboard</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Payments
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li> <NavLink className="dropdown-item" to="new_payment_creation">New Payment Creation</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="payments_history">View Payments</NavLink></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className='custom__NavBox'>
                                    <ul className='navbar-nav'>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link mr-4">
                                                <i className="bi bi-person-fill"></i> {props.authuser}|
                                            </a>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink to={"/"} className="logout__Link nav-link"><i className="bi bi-box-arrow-in-left"></i> Logout</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='content__Area'>
                            <Routes>
                                <Route path='main__' element={<LandingDash />} />
                                <Route path='new_payment_creation' element={<NewPayment />} />
                                <Route path='payments_history' element={<ViewPayments />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav