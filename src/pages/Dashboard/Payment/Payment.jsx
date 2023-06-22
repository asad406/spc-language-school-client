import { useForm } from 'react-hook-form';
import useAxios from '../../../hooks/useAxios';
import { useLocation } from 'react-router-dom';
import useClasses from '../../../hooks/useClasses';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Payment = () => {
    const [, refetch] = useClasses();
    const [axiosSecure] = useAxios();
    const location = useLocation();
    const [dis,setDis]= useState(false)
    const classInfo = location.state;
    const {
        email,
        className,
        instructorEmail,
        instructorName,
        price,
        selectedClassId,
        _id
    } = classInfo;
    // console.log(selectedClassId)
    // console.log(price)
    const selectedClass = {
        email,
        className,
        instructorEmail,
        instructorName,
        price,
        selectedClassId,
    };
    // console.log(classInfo);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        //Payment history
        const { card } = data;
        const paymentHistory = {
            className,
            instructorName,
            cardNumber: card,
            amount: selectedClass?.price,
            date: new Date().toISOString().split('T')[0],
            time: new Date().toLocaleTimeString(),
        };
        reset();
        axiosSecure.post('/payment', paymentHistory).then(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Payment Successful.',
                showConfirmButton: false,
                timer: 1500
              })
        });

        //enrolled class
        axiosSecure.post('/enrolledclass', selectedClass).then((res) => {
            if (res?.data?.insertedId) {
                axiosSecure
                    .delete(`/selectedclass/to/${_id}`)
                    .then((res) => {
                        console.log(res?.data);
                        setDis(true)
                    });
            }
        });

        //reduce seats and increase enrolled student
        axiosSecure.patch(`classes/status/${selectedClassId}`).then(() => {
            refetch();
        });
    };

    return (
        <div>
            <h1 className="text-4xl py-20 font-semibold">Payment</h1>
            <p className='pb-5 text-lg font-semibold'>Total payment amount <span className='text-orange-600'>${price}</span> </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex justify-evenly gap-5">
                    <div>
                        <input
                            className="border border-gray-400 w-full py-2 px-3 rounded-lg"
                            placeholder="Card Number"
                            type="text"
                            {...register('card', { required: true })}
                        />
                        {errors.card && <span>This field is required</span>}
                    </div>
                    <div>
                        <input
                            className="border border-gray-400 w-full py-2 px-3 rounded-lg"
                            placeholder="password"
                            type="password"
                            {...register('password', { required: true })}
                        />

                        {errors.password && <span>This field is required</span>}
                    </div>

                    <div>
                        <input
                            disabled= {dis}
                            className="btn btn-sm btn-neutral"
                            value="pay"
                            type="submit"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Payment;
