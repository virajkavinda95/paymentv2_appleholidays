import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getPaymentData, getPaymentDataById, getPaymentStatusCheck } from '../API_services/API_services';
import './ViewPayments.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ViewPayments() {

    const [paymentData, setPaymentData] = useState([]);
    const [transData, setTransData] = useState([]);
    const [payId, setPayId] = useState();

    const [modalShow, setModalShow] = useState(false)

    console.log(paymentData);

    const handleOnClck = (payid) => {
        setPayId(payid)
        setModalShow(true)
    }

    const handleCheckPayment = (payid,currency) => {
        setPayId(payid)
        getPaymentStatusCheck(payid, currency)
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
                        <table className='table table-bordered payment__DetailTbl' id='myTable'>
                            <thead>
                                <tr>
                                    <th rowSpan={2}>#</th>
                                    <th rowSpan={2}>Customer E-mail</th>
                                    <th rowSpan={2}>Payment For</th>
                                    <th colSpan={2}>
                                        Tour
                                    </th>
                                    <th colSpan={2}>Payments</th>
                                    <th rowSpan={2}>Remarks</th>
                                    <th rowSpan={2}>Created User</th>
                                    <th rowSpan={2}>Date</th>
                                    <th rowSpan={2}>Payment Link</th>
                                    <th rowSpan={2}>Actions</th>
                                </tr>
                                <tr>
                                    <th scope='col'>Tour ID</th>
                                    <th scope='col'>PNR</th>
                                    <th scope='col'>Amount</th>
                                    <th scope='col'>Paid Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    paymentData?.map((val, idx) => {
                                        return (
                                            <>
                                                <tr key={idx}>
                                                    <td>{val['PaymentId']}</td>
                                                    <td>{val['customer_email']}</td>
                                                    <td>{val['payment_for']}</td>
                                                    <td>{val['tour_id']}</td>
                                                    <td>{val['PNR']}</td>
                                                    <td>{val['currency'] === 'USD' ? '$' : 'Rs. '}{val['total_amount']}</td>
                                                    <td>{val['currency'] === 'USD' ? '$' : 'Rs. '}{val['with_charge']}</td>
                                                    <td>{val['remarks']}</td>
                                                    <td>{val['name']}</td>
                                                    <td>{val['CreatedAt']}</td>
                                                    <td>{val['pay_link']}</td>
                                                    <td style={{ textAlign: 'center' }}>
                                                        <button type="button" className='btn btn-sm btn__ViewTrans mr-1' data-bs-toggle="modal" onClick={() => { handleOnClck(val['PaymentId']) }} data-bs-target="#staticBackdrop">View Transaction&nbsp;<i class="bi bi-eye"></i></button>
                                                        <button type="button" className='btn btn-sm btn__ViewTrans' data-bs-toggle="modal" onClick={() => { handleCheckPayment(val['PaymentId'], val['currency']) }} data-bs-target="#staticBackdrop">Check Payment Status&nbsp;<i class="bi bi-info-circle"></i></button>
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
                <div className="row">
                    <Modal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        size="xl"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Payment Transaction Status
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
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
                                                <td style={transData?.['payment_status'] === 'CAPTURED' ? { backgroundColor: "#a0e5a0", fontWeight: "600", color: "#000" } : { backgroundColor: "#eb6a6a", color: "#fff", fontWeight: "600" }}>{transData?.['payment_status'] === 'CAPTURED' ? 'SUCCESS' : 'FAILED'}</td>
                                                <td>{transData?.['TransTime']}</td>
                                            </tr>
                                        </>
                                    }
                                </tbody>
                            </table>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => setModalShow(false)}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </div>
            </div>
        </div>
    )
}

export default ViewPayments