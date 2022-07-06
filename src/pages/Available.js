import React from 'react';

const Available = () => {
    return (
        <div className='bg-blue-800 mt-[-100px] py-10'>
            <div className='max-w-6xl mx-auto my-5 mb-5 px-5 md:px-8 lg:px-8'>
                <h1 className='text-4xl font-bold text-white my-2'>Available Times</h1>
                <p className='text-white text-xl my-2'>Dhaka Time</p>
                <p className='text-gray-400 text-lg  my-2'>This teacher may live in a different time zone.</p>
                <div className='my-5 flex flex-wrap justify-center md:justify-start lg:justify-start'>
                    <div className='bg-white p-8 rounded-lg mx-2 my-2 '>
                        <h2 className='text-3xl mb-5'>Mon Jul 18</h2>
                        <p>Jul 18 - Jul 22 (1 week)</p>
                        <p>Mo, Tu, We, Th, Fr</p>
                        <p>6pm - 6:50pm</p>
                        <p className='mt-5 mb-3'>4 learners enrolled</p>
                        <button className='rounded-full bg-blue-800 text-white px-8 py-2 text-xl font-semibold'>Enroll</button>
                    </div>
                    <div className='bg-white p-8 rounded-lg mx-2 my-2 '>
                        <h2 className='text-3xl mb-5'>Mon Jul 18</h2>
                        <p>Jul 18 - Jul 22 (1 week)</p>
                        <p>Mo, Tu, We, Th, Fr</p>
                        <p>6pm - 6:50pm</p>
                        <p className='mt-5 mb-3'>4 learners enrolled</p>
                        <button className='rounded-full bg-blue-800 text-white px-8 py-2 text-xl font-semibold'>Enroll</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Available;