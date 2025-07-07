import React from 'react';
import shape1 from '../assets/shape1.png'
import intro_banner from '../assets/intro_banner.png'
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router';

const SignUpPage = () => {
    return (
        <div className='min-h-lvh md:min-h-screen bg-contain bg-left bg-no-repeat relative' style={{ backgroundImage: `url(${shape1})` }}>

            <div className='absolute -z-10 hidden lg:flex items-center justify-center w-full h-full'>
                <img src={intro_banner} alt="" className='w-[400px] -ml-48' />
            </div>

            <div className='container mx-auto min-h-screen p-8 md:p-24 flex flex-col-reverse lg:flex-row items-center justify-between'>
                {/* Left Part */}
                <div>
                    <h1 className='text-sky-700 text-2xl md:text-4xl lg:text-6xl font-extrabold font-audiowide text-center lg:text-left'>xm<span className='text-secondary'>ee</span></h1>

                    <p className='my-4 font-semibold md:text-lg lg:text-2xl text-slate-400 text-center lg:text-left'>
                        Hurry! Create new account to <br />
                        Explore Our Trending Services
                    </p>

                    <p className='font-semibold text-sky-700 lg:mt-24 text-center lg:text-left'>
                        If you already have an account, <br />
                        please <Link to={'/'} className='text-secondary underline'>SIGN IN</Link>
                    </p>
                </div>

                {/* Right Part */}
                <div className="min-w-full md:min-w-md">
                    <fieldset className="fieldset">
                        <h3 className='text-slate-400 font-semibold text-lg md:text-2xl font-audiowide mb-4 text-center'>Sign Up with <span className='text-secondary'>Email</span></h3>
                        <input type="email" className="p-3 md:p-4 rounded-xl text-sm md:text-base bg-slate-100 font-semibold my-1" placeholder="Enter Email" />
                        <input type="password" className="p-3 md:p-4 rounded-xl text-sm md:text-base bg-slate-100 font-semibold my-1" placeholder="Enter Password" />
                        <div><a className="link link-hover text-sm font-semibold text-sky-600 ml-1">Forgot password?</a></div>
                        <button className="bg-secondary hover:bg-slate-500 text-white hover:cursor-pointer text-xs md:text-base rounded-xl mt-4 p-3 md:p-4">Sign Up</button>
                    </fieldset>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-grow h-px bg-slate-300"></div>
                        <span className="mx-4 text-sm text-slate-500 font-semibold">OR</span>
                        <div className="flex-grow h-px bg-slate-300"></div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="flex items-center justify-center gap-4">
                        <button className="flex items-center justify-center bg-white border text-slate-700 hover:bg-slate-100 hover:cursor-pointer font-semibold p-3 rounded-xl shadow-sm">
                            <FaGoogle />
                        </button>

                        <button className="flex items-center justify-center bg-white border text-slate-700 hover:bg-slate-100 hover:cursor-pointer font-semibold p-3 rounded-xl shadow-sm">
                            <FaFacebookF />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;