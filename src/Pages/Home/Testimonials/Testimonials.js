import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import ReviewCart from './ReviewCart/ReviewCart';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            reviews: '',
            location: 'california',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            reviews: '',
            location: 'california',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            reviews: '',
            location: 'california',
            img: people3
        },
    ]
    return (
        <section className='my-28'>
            <div className="flex justify-between">
                <div className="">
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What out Patients say</h2>
                </div>
                <div className="">
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    reviews.map(review => <ReviewCart
                        review={review}
                        key={review._id}
                    ></ReviewCart>)
                }
            </div>
        </section>
    );
};

export default Testimonials;