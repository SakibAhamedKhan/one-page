import React from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import {IoIosArrowForward} from 'react-icons/io';
import {FiHeart} from 'react-icons/fi';
import {RiShareForwardLine} from 'react-icons/ri';

const HomeBanner = () => {
    return (
        <div className='max-w-6xl mx-auto mt-10 mb-5 px-3 md:px-8 lg:px-8'>
            <h1 className='text-4xl font-bold'>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More</h1>
            <h6 className='flex flex-column items-center text-gray-400 font-bold text-lg  hover:text-blue-800 hover:underline my-2 cursor-pointer w-fit'>Multi-Day Course <BsQuestionCircle className='ml-3' /></h6>

            <div className='grid grid-cols-2'>
                <div>
                    <p>In this 5 day class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.</p>

                    <div className='flex flex-column items-center my-4'>
                        <div className='border-2 rounded-full border-blue-500'>
                            <img className='w-8 h-8 rounded-full' src="https://i.ibb.co/6FrvhSK/76.jpg" alt="" />
                        </div>
                        <div className='ml-3'>
                            <h4 className='text-blue-600 text-lg cursor-pointer'>Kimberly R Moseler</h4>
                        </div>
                    </div>

                    <div className='flex flex-column items-center'>
                        <div className='flex flex-column'>
                            <AiFillStar className='text-amber-400 text-xl' />
                            <AiFillStar className='text-amber-400 text-xl' />
                            <AiFillStar className='text-amber-400 text-xl' />
                            <AiFillStar className='text-amber-400 text-xl' />
                            <AiFillStar className='text-amber-400 text-xl' />
                        </div>
                        <div className='ml-3'>469 total reviews for this teacher</div>
                    </div>
                    <div className='flex flex-column items-center'>
                        <div className='flex flex-column'>
                            <AiFillStar className='text-amber-400 text-xl' />
                            <AiFillStar className='text-amber-400 text-xl' />
                            <AiFillStar className='text-amber-400 text-xl' />
                            <AiFillStar className='text-amber-400 text-xl' />
                            <AiFillStar className='text-amber-400 text-xl' />
                        </div>
                        <div className='ml-3'>5 reviews for this class</div>
                    </div>
                    <h5 className='text-lg my-1'>Completed by 21 learners</h5>

                    <div className='my-4 flex flex-column items-center justify-between flex-wrap'>
                        <button class="rounded-full text-white py-2 px-5 text-xl font-semibold bg-blue-800 hover:bg-blue-900">See Class Schedule <IoIosArrowForward className='inline font-bold text-2xl'/> </button>
                        <div className='flex flex-column items-center hover:underline text-blue-800 cursor-pointer my-2'>
                            <FiHeart className='text-2xl mt-1 '/>
                            <span className='ml-1 text-xl font-semibold '>Save</span>
                        </div>
                        <div className='flex flex-column items-center hover:underline text-blue-800 cursor-pointer my-2'>
                            <RiShareForwardLine className='text-2xl mt-1 '/>
                            <span className='ml-1 text-xl font-semibold '>Share</span>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default HomeBanner;