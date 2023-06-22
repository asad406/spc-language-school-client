import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import GoogleLogin from '../../components/GoogleLogin/GoogleLogin';
import Swal from 'sweetalert2';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    /* const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result);
                if (result) {
                    setSuccess('Login Successful');
                }
                navigate(from, { replace: true });
            })
            .then((error) => {
                if (error) {
                    setError('Login Not Successful');
                }
            });
    }; */
    const onSubmit = (data) => {
        // console.log(data);
        signIn(data.email, data.password)
            .then((result) => {
                // console.log(result);
                if (result) {
                    setSuccess('Login Successful');
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Login Successful',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
                if (error) {
                    setError('Login Not Successful');
                }
            });
    };

    return (
        <div className="border mt-10 w-2/4 mx-auto rounded-2xl shadow-md bg-slate-100 pt-5 pb-8">
            <h3 className="text-3xl pb-3 font-semibold text-center">Login</h3>
            <hr className="py-2" />
            <form
                className="space-y-3 text-center"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <label
                        className="block font-semibold"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="border border-gray-300 rounded-lg p-2 w-3/4"
                        placeholder="Email"
                        type="email"
                        {...register('email')}
                    />
                </div>
                <div>
                    <label
                        className="block font-semibold"
                        htmlFor="email"
                    >
                        Password
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="border border-gray-300 rounded-lg p-2 w-3/4"
                        placeholder="Password"
                        {...register('password', { required: true })}
                    />
                    <button onClick={togglePasswordVisibility}>
                        {showPassword ? (
                            <FaEye></FaEye>
                        ) : (
                            <FaEyeSlash></FaEyeSlash>
                        )}
                    </button>
                    {/* {errors.exampleRequired && <span>This field is required</span>} */}
                </div>

                <input
                    className="btn btn-neutral"
                    type="submit"
                />
                <p>
                    Don not have a account?{' '}
                    <Link to="/register">
                        <button className="btn btn-sm text-red-500">
                            Sign up
                        </button>
                    </Link>
                </p>
                {error && (
                    <div className="flex items-center justify-center">
                        <p className="mt-2 text-red-600 text-center  px-5 pb-4 ">
                            {error}
                        </p>
                    </div>
                )}
                {success && (
                    <div className="flex items-center justify-center">
                        <p className="mt-2 text-success text-center  px-5 pb-4 rounded">
                            {success}
                        </p>
                    </div>
                )}
            </form>
            <hr className="my-5" />
            <GoogleLogin></GoogleLogin>
            {/* <div className="text-center mt-5">
                <button
                    onClick={handleGoogleSignIn}
                    className="btn bg-slate-400 text-white"
                >
                    <FaGoogle></FaGoogle>
                    google
                </button>
            </div> */}
        </div>
    );
};

export default Login;
