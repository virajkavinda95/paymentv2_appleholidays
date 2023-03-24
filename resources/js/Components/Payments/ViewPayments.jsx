import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getPaymentData } from '../API_services/API_services';
import './ViewPayments.css';

function ViewPayments() {

    const [paymentData, setPaymentData] = useState([]);

    useEffect(() => {
        getPaymentData().then((res) => {
            setPaymentData(res)
        })
    }, [])

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink href="/portal_dashboard/main__">Dashboard</NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page">View Payment</li>
                </ol>
            </nav>

            <div className='container-fluid'>
                <div className="row">
                    <div className='col-md-12'>
                        <table className='table table-bordered payment__DetailTbl'>
                            <thead>
                                <tr>
                                    <th rowSpan={2}>#</th>
                                    <th rowSpan={2}>Customer E-mail</th>
                                    <th rowSpan={2}>Payment For</th>
                                    <th colSpan={2}>
                                        Tour
                                    </th>
                                    <th rowSpan={2}>Date</th>
                                    <th rowSpan={2}>Amount (LKR)</th>
                                    <th rowSpan={2}>Paid Amount (LKR)</th>
                                    <th rowSpan={2}>Remarks</th>
                                    <th rowSpan={2}>Created User</th>
                                    <th rowSpan={2}>Actions</th>
                                </tr>
                                <tr>
                                    <th scope='col'>Tour ID</th>
                                    <th scope='col'>PNR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    paymentData?.map((val, idx) => {
                                        return(
                                            <>
                                                <tr>
                                                    <td>{val['PaymentId']}</td>
                                                    <td>{val['customer_email']}</td>
                                                    <td>{val['payment_for']}</td>
                                                    <td>{val['tour_id']}</td>
                                                    <td>{val['PNR']}</td>
                                                    <td>{val['created_at']}</td>
                                                    <td>{val['total_amount']}</td>
                                                    <td>{val['with_charge']}</td>
                                                    <td>{val['remarks']}</td>
                                                    <td>{val['name']}</td>
                                                    <td style={{ textAlign:'center' }}>
                                                        <button className='btn btn-warning btn-sm btn__ViewTrans'>View Transaction&nbsp;<i class="bi bi-info-circle"></i></button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPayments