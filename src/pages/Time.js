import React from 'react';
import './Time.css'
import Wave from 'react-wavify'
import { BsQuestionCircle } from 'react-icons/bs';
import { TbBuildingWarehouse } from 'react-icons/tb';
import { MdDateRange } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BiTimeFive } from 'react-icons/bi';
import { RiCake2Line } from 'react-icons/ri';

const Time = () => {
    return (
        <div className='my-24' style={{ background: '#f0f0f0' }}>
            <Wave fill="url(#gradient)" className='mt-[-50px]'>
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)" >
                        <stop offset="10%" stopColor="#f0f0f0" />
                        <stop offset="90%" stopColor="#f0f0f0" />
                    </linearGradient>
                </defs>
            </Wave>
            <div className='mt-[-80px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 max-w-6xl mx-auto mt-10 mb-5 px-5 md:px-8 lg:px-8 pb-8 gap-4'>
                <div className='col-span-2 w-full'>
                    <div className='flex flex-wrap block'>
                        <div className='mr-20'>
                            <div className='flex my-2 items-center'>
                                <TbBuildingWarehouse className='text-2xl mr-3' />
                                <h2 className='flex flex-row items-center text-2xl font-bold hover:text-blue-800 hover:underline cursor-pointer w-fit'>Multi-Day Course <BsQuestionCircle className='mt-1 ml-2' /></h2>
                            </div>
                            <div className='flex my-2 items-center'>
                                <MdDateRange className='text-2xl mr-3' />
                                <h2 className='text-2xl font-bold'>5x per week</h2>
                                <p className='mt-2 ml-2 font-extralight'>over 1 week</p>
                            </div>
                            <div className='flex my-2 items-center'>
                                <HiOutlineUserGroup className='text-2xl mr-3' />
                                <h2 className='text-2xl font-bold'>1-10</h2>
                                <p className='mt-2 ml-2 font-extralight'>learners per class</p>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='flex mb-2 lg:my-2 md:my-2 items-center'>
                                <BiTimeFive className='text-2xl mr-3' />
                                <h2 className='text-2xl font-bold'>50 minutes</h2>
                                <p className='mt-2 ml-2 font-extralight'>per class</p>
                            </div>
                            <div className='flex my-2 items-center'>
                                <RiCake2Line className='text-2xl mr-3' />
                                <h2 className='text-2xl font-bold'>6-9</h2>
                                <p className='mt-2 ml-2 font-extralight'>year olds</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-white px-4 py-8 rounded-lg shadow-md'>
                        <div className='flex justify-center'>
                            <h2 className='text-4xl font-bold'>$45.00</h2>
                            <p className='mt-4 ml-1 font-extralight'>USD</p>
                        </div>
                        <h2 className='text-sm mt-3 text-center'>Total per learner - $9 per class</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Time;