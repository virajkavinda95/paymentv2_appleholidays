import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import './LandingDash.css';
import { getCountData } from '../API_services/API_services';

function LandingDash() {

    const [payCount, setPayCount] = useState()
    const [transCount, setTransCount] = useState()

    useEffect(() => {
      getCountData().then((res) => {
          setPayCount(res.pay)
          setTransCount(res.trans)
      })
    }, [])
    

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink href="/portal_dashboard/main__">Dashboard</NavLink></li>
                    {/* <li className="breadcrumb-item active" aria-current="page">Library</li> */}
                </ol>
            </nav>

            <div className='dashboard__CardSec'>
                <Card type={"Payments"} count={payCount}/>
                <Card type={"Transaction"} count={transCount}/>
            </div>

        </div>
    )
}

export default LandingDash