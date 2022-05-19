import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP')

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://glacial-atoll-10131.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))

    // useEffect(() => {
    //     fetch(`https://glacial-atoll-10131.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='my-10'>
            <h4 className='text-xl text-secondary text-center font-bold my-10'>Available Appointments ON {format(date, 'PP')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services?.map(service => <Service
                        service={service}
                        key={service._id}
                        setTreatment={setTreatment}

                    ></Service>)
                }
                {treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>}
            </div>

        </div >
    );
};

export default AvailableAppointments;