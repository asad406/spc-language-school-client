import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import GoogleLogin from '../../components/GoogleLogin/GoogleLogin';
import Swal from 'sweetalert2';
import useAxios from '../../hooks/useAxios';

const Register = () => {
    const navigate = useNavigate();
    const { createUser, updateUser } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [axiosSecure] = useAxios();
    const onSubmit = (data) => {
        if (data?.password === data?.conPassword) {
            createUser(data.email, data.password)
                .then((result) => {
                    console.log(result);
                    if (result) {
                        setSuccess('Registration Successful');
                        setError(' ');
                        updateUser(data?.name, data?.photo)
                            .then((result) => {
                                console.log(result);
                                const saveUser = {
                                    name: data?.name,
                                    email: data?.email,
                                    photo: data?.photo,
                                };
                                axiosSecure.post('/users', saveUser)
                                    .then((res) => {
                                        if (res?.data?.insertedId) {
                                            Swal.fire({
                                                position: 'top-end',
                                                icon: 'success',
                                                title: 'Sign Up Successful .',
                                                showConfirmButton: false,
                                                timer: 1500,
                                            });
                                            navigate('/');
                                        }
                                    });

                                /* fetch('http://localhost:5000/users', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json',
                                    },
                                    body: JSON.stringify(saveUser),
                                })
                                    .then((res) => res.json())
                                    .then((data) => {
                                        if (data.insertedId) {
                                            Swal.fire({
                                                position: 'top-end',
                                                icon: 'success',
                                                title: 'Sign Up Successful .',
                                                showConfirmButton: false,
                                                timer: 1500,
                                            });
                                            navigate('/');
                                        }
                                    }); */
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                })
                .catch((error) => setError(error.message));
        } else {
            setError('Password do not match.');
        }
    };
    return (
        <div className="border mt-10 w-3/4  md:w-2/4 mx-auto rounded-2xl shadow-md bg-slate-100 pt-5 pb-8">
            <h3 className="text-3xl pb-3 font-semibold text-center">Sign up</h3>
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
                        Name
                    </label>
                    <input
                        className="border border-gray-300 rounded-lg p-2 w-3/4"
                        placeholder="Name"
                        type="text"
                        {...register('name')}
                    />
                </div>
                <div>
                    <label
                        className="block font-semibold"
                        htmlFor="email"
                    >
                        Photo URL
                    </label>
                    <input
                        className="border border-gray-300 rounded-lg p-2 w-3/4"
                        placeholder="Photo URL"
                        type="text"
                        {...register('photo')}
                    />
                </div>
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
                        className="border border-gray-300 rounded-lg p-2 w-3/4"
                        type="password"
                        placeholder="Password"
                        {...register('password', {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
                        })}
                    />
                </div>
                <div>
                    <label
                        className="block font-semibold"
                        htmlFor="email"
                    >
                        Confirm Password
                    </label>
                    <input
                        className="border border-gray-300 rounded-lg p-2 w-3/4"
                        type="password"
                        placeholder="Confirm Password"
                        {...register('conPassword', { required: true })}
                    />
                </div>

                <input
                    className="btn btn-neutral"
                    type="submit"
                />
                <p>
                    Already have a account?{' '}
                    <Link to="/login">
                        <button className="btn btn-sm text-red-500">
                            Login
                        </button>
                    </Link>
                </p>

                {errors.password?.type === 'required' && (
                    <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === 'minLength' && (
                    <p className="text-red-600">
                        Password must be 6 characters.
                    </p>
                )}

                {errors.password?.type === 'pattern' && (
                    <p className="text-red-600">
                        Password must have one Uppercase one Lower case and one
                        special character.
                    </p>
                )}

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
        </div>
    );
};

export default Register;
