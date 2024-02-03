import React, { useEffect, useState } from "react";
import axios from "axios";


const baseURL = "https://65bdb94cb51f9b29e933a420.mockapi.io/api/v1/testPayment/pay";
const Payment = ({
    recipientToken,
    cardNumber,
    cardExpDate,
    cardCVV,
    currency,
    amount,
}) => {
  const [Pay, setPay] = useState({});
  const [success, setSuccess] = useState(false);

  const formattedAmount = parseFloat(amount);

  


   useEffect(() => {
     if (success) {
       // to save payment details in database

     }
   }, [success]);

  var payment = {
    recipientToken: "v0cdhlxg2dm1zlstkaz6ucaxdrpegspvpg2gqdup3pe3c4wb7z",
    cardNumber: "4242-4242-4242-4242",
    cardExpDate: "12/34",
    cardCVV: "567",
    currency: "INR",
    amount: "1000"
  };

  console.log(payment);

  function pay() {
  
    window.payhere.startPayment(payment);
  }

  window.payhere.onCompleted = function onCompleted(order_id) {
    
  };

  return (
    <button onClick={pay} className="btn-ServiceProvider-1 px-1">
      Pay with Payhere
    </button>
  );
};

export default Payment;