import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-10'>
            <h4 className='text-xl text-secondary text-center font-bold my-10'>Available Appointments ON {format(date, 'PP')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <Service
                        service={service}
                        key={service._id}
                        setTreatment={setTreatment}
                    ></Service>)
                }
                {treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>}
            </div>

        </div >
    );
};

export default AvailableAppointments;