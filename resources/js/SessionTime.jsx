import React, { useRef, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './SessionTime.css';
import axios from 'axios'

Modal.setAppElement('#root')
function SessionTime() {

    const idleTimerRef = useRef(null);
    const navigate = useNavigate();
    const [modelIsOpen, setModalIsOpen] = useState(false)
    const setTimeOutRef = useRef(null)

    const logout = () => {
        sessionStorage.clear();
        navigate('/');
        setModalIsOpen(false);
    }

    const onidle = () => {
        sessionStorage.clear();
        // console.log('user idle');
        setModalIsOpen(true);
        setTimeOutRef.current = setTimeout(1.2e+6);
    }

// session timeout happens on every 20 mintues
    const idleTImer = useIdleTimer({
        crossTab: true,
        ref: idleTimerRef,
        timeout: 1.2e+6,
        onIdle: onidle
    })
    return (
        <div idleTImer={idleTImer} className="session__MainDiv">
            <Modal isOpen={modelIsOpen} className="session__Model">
                <h2 className='session__ModalHeader'>Ops!! You have been inactive for a while</h2>
                <p className='session__ModalPara'>Please login in again.</p>

                <div>
                    <button className='btn btn-warning session__ModalBtn' onClick={logout}>Okay</button>
                </div>
            </Modal>
        </div>
    )
}

export default SessionTime