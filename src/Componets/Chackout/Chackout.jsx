import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from '../../Hooks/UseDatauser/useAxiosSecure';
import { AuthContext } from '../../AuthProvider/Authprovider';
import Swal from 'sweetalert2';
import './Chackout.css'
const Chackout = ({ cart, price }) => {
     const { user } = useContext(AuthContext)
     const stripe = useStripe();
     const [axiosSecure] = useAxiosSecure()
     const [cardError, setCardError] = useState('');
     const [processing, setProcessing] = useState(false);
     const elements = useElements()
     const [transactionId, setTransactionId] = useState('');

     const [clientSecret, setClientSecret] = useState('');
     useEffect(() => {
          if (price > 0) {
               axiosSecure.post('/create-payment-intent', { price })
                    .then(res => {
                         console.log(res.data.clientSecret)
                         setClientSecret(res.data.clientSecret);
                    })
          }
     }, [])



     const handleSubmit = async (event) => {
          event.preventDefault();
          if (!stripe || !elements) {
               return;
          }
          const card = elements.getElement(CardElement);
          if (card == null) {
               return
          }
          const { error, paymentMethod } = await stripe.createPaymentMethod({
               type: "card",
               card
          })
          if (error) {
               console.log(error);
               setCardError(error.message)
          }
          if (paymentMethod) {
               setCardError('')
               console.log("paymentMethod", paymentMethod);
          }
          // console.log(event.target);
          setProcessing(true)
          const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(
               clientSecret,
               {
                    payment_method: {
                         card: card,
                         billing_details: {
                              email: user.email || "unknown",
                              name: user.displayName || "anonymous"
                         },
                    },
               },
          );

          if (paymentError) {
               setCardError(paymentError.message)
               console.log(paymentError);
          }
          setProcessing(false)

          console.log(paymentIntent);
          if (paymentIntent.status === 'succeeded') {
               console.log(paymentIntent.id);
               setTransactionId(paymentIntent.id);

               const payment = {
                    email: user?.email,
                    name: user?.name,
                    price,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    quantity: cart.length,
                    cartItems: cart.map(item => item._id),
                    menuItems: cart.map(item => item.menuItemId),
                    status: 'service pending',
                    itemNames: cart.map(item => item.name)

               }

               axiosSecure.post('/payment', payment)
                    .then(res => {
                         console.log(res.data);
                         if (res.data.insertedId) {
                              Swal.fire({
                                   title: 'Payment Success ',
                                   showClass: {
                                        popup: 'animate__animated animate__fadeInDown'
                                   },
                                   hideClass: {
                                        popup: 'animate__animated animate__fadeOutUp'
                                   }
                              })
                         }
                    })
          }

     }

     console.log(transactionId);
     return (
          <div className=' w-2/3 mx-auto'>
               <form onSubmit={handleSubmit}>
                    <CardElement
                         options={{
                              style: {
                                   base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                             color: '#aab7c4',
                                        },
                                   },
                                   invalid: {
                                        color: '#9e2146',
                                   },
                              },
                         }}
                    />
                    <button disabled={!stripe || !clientSecret || processing} className=' mt-3 block  rounded-md py-1 px-4 mx-auto bg-[#0c3ae1] text-white font-medium text-xl  text-center' type="submit" >
                         Pay
                    </button>
               </form>
               {cardError && <p className=' text-red-600 ml-5'> {cardError} </p>}
               {transactionId && <p className=' text-green-600 ml-5'> Transactions Complete white transactionId   =  {transactionId} </p>}
          </div>
     );
};

export default Chackout;