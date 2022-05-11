import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from '../Service/Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nihil neque sit aperiam molestias adipisci pariatur suscipit ducimus odio in.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nihil neque sit aperiam molestias adipisci pariatur suscipit ducimus odio in.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nihil neque sit aperiam molestias adipisci pariatur suscipit ducimus odio in.',
            img: whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className="text-center">
                <h1 className='text-primary text-xl font-bold uppercase'>Our Services</h1>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    services.map(service => <Service
                        service={service}
                        key={service._id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;