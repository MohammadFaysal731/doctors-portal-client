import React from 'react';
import InFoCart from '../InFoCart/InFoCart';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'
const Info = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InFoCart cartTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary - to-primary" img={clock}></InFoCart>
            <InFoCart cartTitle="Our Locations" bgClass="bg-accent" img={marker}></InFoCart>
            <InFoCart cartTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary - to-primary" img={phone}></InFoCart>
        </div>
    );
};

export default Info;