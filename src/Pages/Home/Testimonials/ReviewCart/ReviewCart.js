import React from 'react';

const ReviewCart = ({ review }) => {
    const { img, name, location } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores hic porro mollitia vero nam rerum!</p>

                <div className="flex items-center ">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className="">
                        <h4 className='text-xl'>{name}</h4>
                        <p >{location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewCart;