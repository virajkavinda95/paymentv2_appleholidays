import React, { useState, useEffect } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import './NewPayment.css';
import $ from 'jquery';
import validate from 'jquery-validation';
import { createPaymentLinkUrl } from '../API_services/API_services';
import loader from '../../../assets/loader.gif';

function NewPayment() {

    $(document).ready(function () {
        $('#paymentform').validate();
    })
    var user_string = sessionStorage.getItem('user')
    var uid = JSON.parse(user_string)


    const [loading, setLoading] = useState()

    const [linkData, setLinkData] = useState({
        url: '',
        dataset: '',
        payment_id: ''
    });

    const [linkFormData, setLinkFormData] = useState({
        paymentfor: '',
        cxemail: '',
        tourid: '',
        totamount: 0.00,
        pnr: '',
        remarks: '',
        bankname: '',
        chargeprec: 0.00,
        payamnt: 0.00,
        withchargamnt: 0.00,
        paytype: 'Full Pay',
        currency_type: 'LKR'
    });

    const finalAmountCalculation = (amount, precentage, payamount) => {

        let total = parseFloat(amount, 0.00);
        let prece_val = parseFloat(precentage, 0.00);
        let payingamount = parseFloat(payamount, 0.00);
        let final_amnt = parseFloat(0.00);

        if (linkFormData?.paytype === 'Full Pay') {

            final_amnt = parseFloat(amount, 0.00) + ((total * prece_val) / 100);

            setLinkFormData({ ...linkFormData, withchargamnt: final_amnt.toFixed(2) })
        }
        if (linkFormData?.paytype === 'Half Pay') {
            final_amnt = parseFloat(payamount, 0.00) + ((payingamount * prece_val) / 100);

            setLinkFormData({ ...linkFormData, withchargamnt: final_amnt.toFixed(2) })
        }

    }

    const handleChange = (e) => {

        setLinkFormData({ ...linkFormData, [e.target.name]: e.target.value });

    }

    useEffect(() => {
        finalAmountCalculation(linkFormData?.totamount, linkFormData?.chargeprec, linkFormData?.payamnt)
    }, [linkFormData?.totamount, linkFormData?.chargeprec, linkFormData?.payamnt, linkFormData?.paytype])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData();

        formData.append('paymentfor', linkFormData.paymentfor);
        formData.append('cxemail', linkFormData.cxemail);
        formData.append('tourid', linkFormData.tourid);
        formData.append('totamount', linkFormData.totamount);
        formData.append('pnr', linkFormData.pnr);
        formData.append('remarks', linkFormData.remarks);
        formData.append('bankname', linkFormData.bankname);
        formData.append('chargeprec', linkFormData.chargeprec);
        formData.append('payamnt', linkFormData.payamnt);
        formData.append('withchargamnt', linkFormData.withchargamnt);
        formData.append('paytype', linkFormData.paytype);
        formData.append('currency_type', linkFormData.currency_type);
        formData.append('user_id', uid.id);

        console.log(...formData)
        setLoading(true)
        createPaymentLinkUrl(formData).then((res) => {
            console.log(res);

            setTimeout(() => {
                setLinkData({
                    url: res?.link,
                    dataset: res?.data_set?.[0],
                    payment_id: res?.pid
                })
                setLoading(false)
            }, [3000])
        })

    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink href="/portal_dashboard/main__">Dashboard</NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page">New Payment Creation</li>
                </ol>
            </nav>

            <div className='mt-5 form__Fields'>
                <form className='row' id="paymentform" onSubmit={handleFormSubmit}>
                    <fieldset className='form-row col-md-5 fieldset1'>
                        <legend className='mb-4' visible="true">Payment Details</legend>
                        <div className="form-group col-md-6">
                            <label className="form-label" htmlFor="paymentfor">Payment For <span className='req__Star'>*</span></label>
                            <select className="form-select required" id="paymentfor" name="paymentfor" onChange={handleChange} aria-label="Floating label select example">
                                <option selected>--select organization--</option>
                                <option value="Travelpass">Travelpass</option>
                                <option value="Apple Holidays">Apple Holidays</option>
                                <option value="Sharmila Travels">Sharmila Travels</option>
                                <option value="Aahaas">Aahaas</option>
                            </select>
                        </div>
                        <div className="form-group mb-3 col-md-6">
                            <label className="form-label" htmlFor="cxemail">Customer Email <span className='req__Star'>*</span></label>
                            <input type="email" className="form-control required" id="cxemail" name="cxemail" onChange={handleChange} placeholder="name@example.com" />
                        </div>
                        <div className="form-group mb-3 col-md-6">
                            <label className="form-label" htmlFor="tourid">Tour Id <span className='req__Star'>*</span></label>
                            <input type="text" className="form-control required" id="tourid" name="tourid" onChange={handleChange} placeholder="Tour id" />
                        </div>
                        <div className='col-md-3'>
                            <label className="form-label" htmlFor="currency_type">Currency <span className='req__Star'>*</span></label>

                            <select className='form-select currency_type required' name='currency_type' onChange={handleChange} id='currency_type'>
                                <option>--select currency--</option>
                                <option value={'LKR'} selected>LKR</option>
                                <option value={'USD'}>USD</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label className="form-label" htmlFor="totamount">Total Amount <span className='req__Star'>*</span></label>
                            <input type="number" className="form-control required" min={0} id="totamount" name="totamount" onChange={handleChange} value={linkFormData?.totamount} placeholder="Total Amount" />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="form-label" htmlFor="pnr">PNR <span className='req__Star'>*</span></label>
                            <input type="text" className="form-control" id="pnr" name="pnr" onChange={handleChange} placeholder="PNR" />
                        </div>

                        <div className="form-group col-md-6">
                            <label className="form-label" htmlFor="remarks">Remarks</label>
                            <textarea className="form-control required" placeholder="Remarks" id="remarks" name="remarks" onChange={handleChange} />
                        </div>
                    </fieldset>
                    <div className='col-1'>

                    </div>
                    <fieldset className='form-row col-md-5 fieldset2'>
                        <legend className='mb-4'>Bank Details</legend>
                        <div className="form-group col-md-6">
                            <label className="form-label" htmlFor="bankname">Bank Name <span className='req__Star'>*</span></label>
                            <select className="form-select" id="bankname" name="bankname" onChange={handleChange} aria-label="Floating label select example">
                                <option selected>--select bank--</option>
                                <option value="Commercial Bank">Commercial Bank</option>
                                <option value="Nation Trust Bank">Nation Trust Bank</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="form-label" htmlFor="paytype">Payment Type <span className='req__Star'>*</span></label>
                            <select className="form-select" id="paytype" name="paytype" onChange={handleChange} aria-label="Floating label select example">
                                {/* <option selected>--select payment type--</option> */}
                                <option value="Full Pay" selected>Full Pay</option>
                                <option value="Half Pay">Half Pay</option>
                                <option value="Installment Pay">Installment Pay</option>
                            </select>
                        </div>
                        <div className="form-group mb-3 col-md-6">
                            <label className="form-label" htmlFor="chargeprec">Charge Amount <span className='req__Star'>*</span></label>
                            <select className="form-select" id="chargeprec" name="chargeprec" onChange={handleChange} aria-label="Floating label select example">
                                {/* <option selected>--select charge amount--</option> */}
                                <option value="0">None</option>
                                <option value="3.15">3.15%</option>
                                <option value="3">3%</option>
                            </select>
                        </div>
                        <div className="form-group mb-3 col-md-6">
                            <label className="form-label" htmlFor="payamnt">Paying Amount <span className='req__Star'>*</span></label>
                            <input type="number" className="form-control" min={0} id="payamnt" name="payamnt" onChange={handleChange} value={linkFormData?.paytype === 'Full Pay' ? linkFormData.totamount : linkFormData.payamnt} placeholder="Paying Amount" disabled={linkFormData?.paytype === 'Half Pay' ? false : true} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="form-label" htmlFor="withchargamnt">With Charge Amount <span className='req__Star'>*</span></label>
                            <input type="number" className="form-control" min={0} id="withchargamnt" name="withchargamnt" onChange={handleChange} value={linkFormData?.withchargamnt} placeholder="with charge" disabled />
                        </div>
                    </fieldset>

                    <button type='submit' className='btn btn-primary col-md-12 btn-sm w-100 my-3 create__LinkBtn' name="create__LinkBtn">Create Link</button>
                </form>
            </div>

            {
                loading === true ?
                    <>
                        <img src={loader} width="100" style={{ display: "block", margin: "0px auto" }} />
                    </>
                    :
                    loading === false ?
                        <div className='paymentLink__Box'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='payment__LinkTop'>
                                        <div className='payment__LinkHeader'>
                                            <h6 className='pay__LinkHeader'>Result: Payment Link</h6>
                                        </div>
                                        <div className='paymentLink_Content'>
                                            <p className="semi_Text">Payment ID: </p><span>{linkData.payment_id}</span>
                                            <p className="semi_Text">Tour ID: {linkData.dataset.tour_id}</p>
                                            <p className="semi_Text">PNR: {linkData.dataset.PNR}</p>
                                            <p className="semi_Text">Payment Method: {linkData.dataset.payment_type}</p>
                                            <p className="semi_Text">Full Amount ({linkData.dataset.currency}): {linkData.dataset.total_amount}</p>
                                            <p className="semi_Text">Paying Amount ({linkData.dataset.currency}): {linkData.dataset.with_charge}</p>
                                            <p className="semi_Text">Customer Email: {linkData.dataset.customer_email}</p>
                                            <p className="semi_Text"><b>Link:</b> <a href={linkData.url} target={"_blank"} style={{ fontSize: "13px" }}>{linkData.url}</a></p>

                                            <button type="button" className='btn btn-primary btn__EmailLink btn-sm mt-3' name="btn__EmailLink">Email Link</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <></>
            }
        </div>
    )
}

export default NewPayment