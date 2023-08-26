import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
// import { useRef } from 'react';
import Swal from 'sweetalert2'
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContex } from '../../../Firebase/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  // const captcharef = useRef(null);
  const navigate=useNavigate();
  const location=useLocation();
  const from = location.state?.from?.pathname || "/";

  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContex);
  const handleSubmit = (e) => {
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
          position: 'top-end',
          icon: 'success',
          title: 'succeffully login',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, { replace: true });
      })
      .catch(error=>{
        Swal.fire({
          title: 'Error!',
          text: 'wrong user.Try Again',
          icon: 'error',
          confirmButtonText: 'ok'
        })
      })
  }

  useEffect(() => {
    loadCaptchaEnginge(6);

  }, [])

  const handleCaptcha = (e) => {
    // const value = captcharef.current.value;
    const value = e.target.value
    console.log(value);
    if (validateCaptcha(value) == true) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }
  return (
    <div>
      <h3>Please Login Now...</h3>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">

                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  < LoadCanvasTemplate />
                </label>
              <input  onBlur={handleCaptcha} type="text"    name="captcha" placeholder="type valid captcha" className="input input-bordered" /> {/* ref={captcharef} */}
              </div>
              {/* <button onClick={handleCaptcha} className="btn btn-outline btn-sm">Matching</button> */}
              <div className="form-control mt-6">
                <button disabled={disabled} className="btn btn-primary">Login</button>
         
              </div>
            </form>
            <div className="mt-4 text-grey-600">
                            Are you new user? {" "}
                            <span>
                                <Link to='/registration' className="text-purple-600 hover:underline" href="#">
                                   signUp
                                </Link>
                            </span>
                        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;