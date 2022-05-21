import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1lD1Dhy3FUudtrZ47jK2dzc5JsfxJSzyOsY50DQZ7EEIgGtLlGRsxKNRWxrwV2G4cFH7c1ZCNpk7mOX4faKu9B00VF1KDwlB');

const Payment = () => {
    const { id } = useParams();

    const url = `http://localhost:5000/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-purple-500 font-bold '>Hello, {appointment.patientName}</p>
                    <h2 className="card-title">Please Pay For {appointment.treatment}</h2>
                    <p>Your Appointment <span className='text-orange-700'>{appointment.date}</span> At <span>{appointment.slot}</span> </p>
                    <p>Please Pay: $ {appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>


                </div>
            </div>
        </div>

    );
};

export default Payment;