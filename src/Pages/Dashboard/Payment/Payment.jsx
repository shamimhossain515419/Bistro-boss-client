import React from 'react';
import SectionTitle from '../../../Componets/SectionTitle';
import Chackout from '../../../Componets/Chackout/Chackout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCard from '../../../Hooks/UseDatauser/useCard';

const Payment = () => {
     const [cart]=useCard();
const total=cart.reduce( (sum, item)=> sum + item.price ,0)
const price= parseFloat(total);
     
     const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GETEWAY)
     return (
          <div>
               <SectionTitle subTitle="Please Process" HeaderTitle="Payment"></SectionTitle>
               <h1> </h1>
               <div>
                    <Elements stripe={stripePromise}>
                    <Chackout cart={cart} price={price}></Chackout>
                    </Elements>
                    
               </div>
          </div>
     );
};

export default Payment;