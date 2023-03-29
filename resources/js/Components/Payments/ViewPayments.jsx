import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getPaymentData, getPaymentDataById } from '../API_services/API_services';
import './ViewPayments.css';

function ViewPayments() {

    const [paymentData, setPaymentData] = useState([]);
    const [transData, setTransData] = useState([]);
    const [payId, setPayId] = useState();

    console.log(payId);

    const handleOnClck = (payid) => {
        setPayId(payid)
    }

    useEffect(() => {
        getPaymentData().then((res) => {
            setPaymentData(res)
        })

        getPaymentDataById(payId).then((res) => {
            setTransData(res.data)
        })
    }, [payId])

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
                                        return (
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
                                                    <td style={{ textAlign: 'center' }}>
                                                        <button type="button" className='btn btn-sm btn__ViewTrans' data-bs-toggle="modal" onClick={() => { handleOnClck(val['PaymentId']) }} data-bs-target="#staticBackdrop">View Transaction&nbsp;<i class="bi bi-info-circle"></i></button>
                                                    </td>
                                                </tr>

                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                    <div class="modal fade modal-xl" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Transaction Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <table className='table table-bordered payment__DetailTbl' style={{ fontSize: "12px" }}>
                                        <thead>
                                            <tr>
                                                <th>Payment Id</th>
                                                <th>Bank Name</th>
                                                <th>Tour Id</th>
                                                <th>PNR</th>
                                                <th>Net Amount</th>
                                                <th>Paid Amount</th>
                                                <th>Bank Charge</th>
                                                <th>Auth Token</th>
                                                <th>Transaction Token</th>
                                                <th>Payment Status</th>
                                                <th>Transaction Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                <>
                                                    <tr>
                                                        <td>{transData?.['PaymentId']}</td>
                                                        <td>{transData?.['bank_name']}</td>
                                                        <td>{transData?.['tour_id']}</td>
                                                        <td>{transData?.['PNR']}</td>
                                                        <td>{transData?.['net_amount']}</td>
                                                        <td>{transData?.['with_charge']}</td>
                                                        <td>{transData?.['charge']}%</td>
                                                        <td>{transData?.['auth_token']}</td>
                                                        <td>{transData?.['trans_token']}</td>
                                                        <td style={transData?.['payment_status'] === 'CAPTURED' ? { backgroundColor: "#a0e5a0", fontWeight: "600", color: "#000" } : { backgroundColor: "#eb6a6a", color: "#fff",fontWeight:"600" }}>{transData?.['payment_status'] === 'CAPTURED' ? 'SUCCESS' : 'FAILED'}</td>
                                                        <td>{transData?.['created_at']}</td>
                                                    </tr>
                                                </>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPayments