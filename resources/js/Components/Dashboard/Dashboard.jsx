import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import './Dashboard.css';
import AuthUser from '../API_authservices';
import toast from 'react-hot-toast';

function Dashboard() {

    const { http_call } = AuthUser();
    const [userData, setUserData] = useState([]);
    console.log(userData);

    useEffect(() => {
        fetchUserData();
    }, [])

    const fetchUserData = () => {
        http_call.post('/auth_user').then((res) => {
            console.log(res.status);
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
            <Nav authuser={userData.name} />
            {/* <SideBar /> */}
        </div>
    )
}

export default Dashboard