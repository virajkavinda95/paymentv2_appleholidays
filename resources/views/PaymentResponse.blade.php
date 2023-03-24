<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <title>Apple Holidays | Payments</title>
</head>

<style>
    .print__Rec {
        display: block;
        margin: 20px auto;
        width: 200px;
        background-color: #000000;
        padding: 10px;
        border-radius: 10px;
        color: #fff;
        outline: none;
        cursor: pointer;
    }
</style>

<body>
    <div class="container">
        <div class="row payment__RecRow" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)">
            <div class="col-md-12">
                <div class="payment__ResponseBox" id="DivIdToPrint">
                    <div class="img__Banner">
                        <img class="d-block flex-center" style="display:block;margin:0px auto;" src="<?php echo asset("AppleHolidays.png") ?>" width="400" />
                    </div>

                    <h1 class="payment__Title" style="text-align:center;color:#77b43f;">Payment Success</h1>
                    <div class="gif__Banner">
                        <img class="d-block flex-center" style="display:block;margin:0px auto;" src="<?php echo asset("success.gif") ?>" width="80" />
                    </div>

                    <div class="body__Data">

                        <table class="data__Table" style="margin: 20px auto;font-family:Roboto;">
                            <tr>
                            <tr>
                                <td style="padding: 10px;">Payment Type</td>
                                <td style="text-align: right;padding: 10px;">{{ $dataset->payment_type }}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px;">Email</td>
                                <td style="text-align: right;padding: 10px;">{{ $dataset->customer_email }}</td>
                            </tr>
                            <tr>
                                <td style="font-weight:600;padding: 10px;">Amount Paid (LKR)</td>
                                <td style="text-align: right;font-weight:600;padding: 10px;">{{ $dataset->with_charge }}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px;">Transaction Id</td>
                                <td style="text-align: right;padding: 10px;">{{ $dataset->trans_token }}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px;">Payment Date</td>
                                <td style="text-align: right;padding: 10px;">{{ $dataset->created_at }}</td>
                            </tr>
                            </tr>
                        </table>


                    </div>
                </div>
                <button type="button" class="btn print__Rec" name="print__Rec" onclick="printDiv()" id="print__Rec">Print Recipt</button>
            </div>
        </div>
    </div>
</body>

<script type="text/javascript">
    function printDiv() {

        var divToPrint = document.getElementById('DivIdToPrint');

        var newWin = window.open('', 'Print-Window');

        newWin.document.open();

        newWin.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');

        newWin.document.close();

    }
</script>

</html>