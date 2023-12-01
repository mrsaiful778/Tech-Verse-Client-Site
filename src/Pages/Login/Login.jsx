import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

   

    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

  
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Login Successfully",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                    }
                });
                navigate(from, { replace: true });
            })
    }
   
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                title: "Login Successfully",
                showClass: {
                    popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
                },
                hideClass: {
                    popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
                }
            });
            navigate('/');
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <>
            <Helmet>
                <title>Tech Verse | LogIn</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                       
                    </div>
                    <div className="card md:1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            
                            <div className="form-control mt-6">

                                <input  className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center pb-3'><small>New Here? <Link className="text-blue-600" to="/signup">sign in</Link></small></p>
                        <p className="text-center my-4 flex justify-center "> <button onClick={handleGoogleSignIn} className="px-24 py-2 rounded-lg flex justify-center items-center gap-3 bg-base-200 hover:bg-gray-300 text-xl"> <FcGoogle></FcGoogle><p > Google</p></button></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;