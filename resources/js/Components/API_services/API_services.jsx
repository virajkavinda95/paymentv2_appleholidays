import React from "react";
import { toast } from "react-hot-toast";
import axios from "axios";


// async function getPaymentUrl(){
//     var UrlArray = new Array();

//     const res = fetch('')
// }
function authUser() {
    var token = sessionStorage.getItem('token')

    const apiUrl = axios.create({
        baseURL: "http://localhost:8000/api",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    return { 'authUrl': apiUrl }
}

async function createPaymentLinkUrl(dataset) {

    try {

        var reslin = '';
        var payid = '';

        var data_set = new Array();

        await axios.post('create_new_pay_link', dataset, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.data.status === 200) {
                reslin = 'http://localhost:8000/api/payment_checkout/payment_session/' + res.data.session_id + '/' + res.data.version + '/' + res.data.pid;
                data_set = res.data.data_set;
                payid = res.data.pid

                toast.success('SUCCESS | Payment link creation success')
            }
        }).catch((err) => {

            // throw new Error(err)
            toast.error(`${err}`)
        });

        return { 'link': reslin, 'data_set': data_set, 'pid': payid };


    } catch (err) {
        // throw new Error(err)
        toast.error(`${err}`)
    }
}

//fetching payment details all
async function getPaymentData() {
    try {

        var paymentArray = new Array();

        await axios.get('get_payment_details').then((res) => {

            if (res.data.status === 200) {
                paymentArray = res.data.data_response
            }

        }).catch((err) => {
            throw new Error(err)
        })

        return paymentArray;
    } catch (err) {
        throw new Error(err)
    }
}

//fetching payment details all by payment id
async function getPaymentDataById(payid) {
    try {

        var paymentArray = new Array();

        await axios.post('get_payment_details_by_id', { 'payId': payid }).then((res) => {
            console.log(res);
            if (res.data.status === 200) {
                paymentArray = res.data.data_response
            }

        }).catch((err) => {
            throw new Error(err)
        })

        return { 'data': paymentArray };
    } catch (err) {
        throw new Error(err)
    }
}

async function getCountData() {
    try {

        var payCount = new Array();
        var TransCount = new Array();

        await axios.get('get_count').then((res) => {

            if (res.data.status === 200) {
                payCount = res.data.payCount
                TransCount = res.data.transCount
            }

        }).catch((err) => {
            throw new Error(err)
        })

        return { 'pay': payCount, 'trans': TransCount };
    } catch (err) {
        throw new Error(err)
    }
}

export { createPaymentLinkUrl, getPaymentData, getCountData, getPaymentDataById }