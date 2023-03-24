import React from 'react';
import './SideBar.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import LandingDash from '../LandingDash/LandingDash';
import NewPayment from '../NewPayment/NewPayment';
import ViewPayments from '../Payments/ViewPayments';

function SideBar() {
    return (
        <>
            <div className='row'>
                <div className='col-md-2'>
                    <div className="wrapper">
                        <nav id="sidebar">

                            <ul className="list-unstyled components">
                                <li>
                                    <NavLink to="main__"><i class="bi bi-speedometer"></i> Dashboard</NavLink>
                                </li>
                                <li className="active">
                                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle main__NavToggle"><i class="bi bi-cash"></i>  Payments</a>
                                    <ul className="collapse list-unstyled" id="homeSubmenu">
                                        <li>
                                            <NavLink to="new_payment_creation">New Payment Creation</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="payments_history">View Payments</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i class="bi bi-wallet"></i> Transactions</a>
                                    <ul className="collapse list-unstyled" id="pageSubmenu">
                                        <li>
                                            <a href="#">Page 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 3</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#organizeMenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i class="bi bi-building"></i> Organizations</a>
                                    <ul className="collapse list-unstyled" id="organizeMenu">
                                        <li>
                                            <a href="#">Page 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 3</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <div className='logout__Sec'>
                                <NavLink to={"/"} className="logout__Link"><i class="bi bi-box-arrow-in-left"></i> Logout</NavLink>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className='col-md-10'>
                    <div className='content__Area'>
                        <Routes>
                            <Route path='main__' element={<LandingDash />} />
                            <Route path='new_payment_creation' element={<NewPayment />} />
                            <Route path='payments_history' element={<ViewPayments />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar