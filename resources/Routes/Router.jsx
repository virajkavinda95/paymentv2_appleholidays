import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "../js/Components/Login/Login";
import Dashboard from "../js/Components/Dashboard/Dashboard"
import { Toaster } from 'react-hot-toast';
import SessionTime from "../js/SessionTime";



const Router = () => {

    const location = useLocation();
    useEffect(() => {

    }, [])

    return (

        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            {location.pathname === '/' ? <></> : <SessionTime />}
            <Routes>
                <Route exact path="/" element={<Login />} />

                <Route exact path="/portal_dashboard/*" element={<Dashboard />} />
                {/* <Route exact path="/admin_dashboard" element={<Dashboard />} /> */}
            </Routes>
        </div>
    )
}

export default Router;