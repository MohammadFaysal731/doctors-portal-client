import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center text-white my-28 '>
            <div className="flex-1 hidden lg:block">
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className="flex-1 p-10">
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl'>Make an Appointment</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque explicabo iusto minus exercitationem cumque amet ducimus quod corporis consectetur reprehenderit! Asperiores, voluptatem deleniti facere ullam saepe excepturi deserunt corporis ab, nisi veniam temporibus quisquam inventore dolores ratione ex dolorem ipsa.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;