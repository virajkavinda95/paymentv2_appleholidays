import React, { useEffect, useState } from 'react';
import AuthUser from '../API_authservices';
import './Login.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const { http_call, setToken } = AuthUser();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        e.persist();

        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData();

        formdata.append('email', loginData.email);
        formdata.append('password', loginData.password);

        http_call.post('/login', formdata).then((res) => {
            console.log(res)
            if (res.data.status === 200) {

                setToken(res.data.user, res.data.access_token);
                navigate('/portal_dashboard/main__')
            }
            if (res.data.status === 401) {
                toast.error('Unauthorized User | Please check the credentials again!', {
                    style: {
                        background: '#333',
                        color: '#fff',
                    }
                })
            }
        }).catch((err) => {
            throw new Error(err);
        })
    }

    useEffect(() => {
    }, [])

    return (
        <>
            <div className='container login__Contrainer'>
                <div className='row login__Row'>
                    <div className='col-4 login__Col'>
                        <h2 className='login__MainHeader'>Apple Holidays</h2>
                        <h5 className='login__SecondHeader'>Welcome to Apple Holidays Payment Portal</h5>
                        <form className='login__From mt-5' onSubmit={handleFormSubmit}>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input type="email" className="form-control" name="email" onChange={handleChange} placeholder='Enter your email' id="email" />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='pass'>Password</label>
                                <input type="password" className="form-control" name="password" onChange={handleChange} placeholder='Enter your password' id="pass" />
                            </div>
                            <button type="submit" className='btn btn-primary btn-sm btn-block login__btn' name="login__btn" id="login__btn">LOGIN</button>
                        </form>
                        <span className="copyright__Text">&copy;2023 Copyrights Apple Tech Labs All right reserved</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login