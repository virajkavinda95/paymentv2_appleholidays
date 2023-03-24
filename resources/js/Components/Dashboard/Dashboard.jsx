import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import './Dashboard.css';
import AuthUser from '../API_authservices';
import toast from 'react-hot-toast';
import SideBar from '../SideBar/SideBar';

function Dashboard() {

    const { http_call } = AuthUser();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetchUserData();
    }, [])

    const fetchUserData = () => {
        http_call.post('/auth_user').then((res) => {
            if (res.data.status === 200) {
                setUserData(res.data.user)
            }
            else {
                toast.error('Session Expired | Please login again!', {
                    style: {
                        background: '#333',
                        color: '#fff',
                    }
                })
            }
        });
    }

    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Nav authuser={userData.name} />
                    </div>
                </div>
                <div>
                    <SideBar />
                </div>
            </div>
        </div>
    )
}

export default Dashboard