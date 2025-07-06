import React from 'react';

const Login = () => {
    return (
        <div className='min-h-screen relative'>

            <div className='container mx-auto p-24 flex items-center justify-between'>
                {/* Left Part */}
                <div>
                    <h1 className='text-purple-700 text-6xl font-extrabold'>Xmee</h1>

                    <p>
                        Hurry! Signin to <br />
                        Explore Our Trending Services
                    </p>

                    <p>
                        If you don't have an account <br />
                        Please sign up
                    </p>
                </div>

                {/* Right Part */}
                <div>
                    <input type="email" name="email" placeholder='example@email.com' />
                    <input type="password" name="password" placeholder='******' />
                    <input type="submit" value="Login" className='btn btn-primary' />
                </div>
            </div>
        </div>
    );
};

export default Login;