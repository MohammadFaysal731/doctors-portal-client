import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen" style={{ background: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Doctors Portal' />
                <div className='p-5'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>You Have Selected:{format(date, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;