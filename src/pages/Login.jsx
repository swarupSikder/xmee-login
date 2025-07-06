import React from 'react';

const Login = () => {
    return (
        <div className='min-h-screen relative'>

            <div className='container mx-auto p-24 flex items-center justify-between'>
                {/* Left Part */}
                <div>
                    <h1 className='text-sky-700 text-6xl font-extrabold font-audiowide'>xmee</h1>

                    <p className='my-4 font-semibold text-2xl text-slate-400'>
                        Hurry! Signin to <br />
                        Explore Our Trending Services
                    </p>

                    <p className='font-semibold text-sky-700 mt-16'>
                        If you don't have an account <br />
                        Please sign up
                    </p>
                </div>

                {/* Right Part */}
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 w-fit">Login</button>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login;