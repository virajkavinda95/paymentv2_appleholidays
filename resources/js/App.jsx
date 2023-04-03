import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from '../Routes/Router';
import toast, { Toaster } from 'react-hot-toast';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

axios.defaults.baseURL = "https://paydev.appletechlabs.com/api/";

export default function App() {
    return (
        <Router />
    );
}

if (document.getElementById('root')) {
    createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <StrictMode>
                <App />
            </StrictMode>

        </BrowserRouter>
    )
}