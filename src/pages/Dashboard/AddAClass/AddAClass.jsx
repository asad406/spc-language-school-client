import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';

const AddAClass = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [axiosSecure] = useAxios();
    const { user } = useContext(AuthContext);
    const onSubmit = (data) => {
        console.log(data);
        const {
            classImage,
            className,
            email,
            name,
            price,
            seats,
            totalEnrolled,
            status,
        } = data;
        const newClass = {
            classImage,
            className,
            email,
            name,
            price: parseInt(price),
            seats: parseInt(seats),
            totalEnrolled: parseInt(totalEnrolled),
            status,
        };

        axiosSecure.post('/classes', newClass).then((res) => {
            if (res?.data?.insertedId) {
                reset();
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'A new class has been added successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };
    return (
        <div className="bg-slate-300 w-3/4 m-4 p-6 rounded-xl shadow-xl">
            <h1 className="pb-8 text-3xl text-center font-semibold">
                Add a Class
            </h1>
            <form
                className="space-y-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <label
                        className="block font-medium"
                        htmlFor="email"
                    >
                        Class Name
                    </label>
                    <input
                        className="border w-full rounded-md py-2 px-2"
                        placeholder="Class Name"
                        {...register('className', { required: true })}
                    />
                    {errors.className && <p>This field is required</p>}
                </div>

                <div>
                    <label
                        className="block font-medium"
                        htmlFor="email"
                    >
                        Class Image URL
                    </label>
                    <input
                        className="border w-full rounded-md py-2 px-2"
                        placeholder="Class Image URL"
                        {...register('classImage', { required: true })}
                    />
                    {errors.classImage && <p>This field is required</p>}
                </div>

                <div>
                    <label
                        className="block font-medium"
                        htmlFor="email"
                    >
                        Instructor Name
                    </label>
                    <input
                        className="border rounded-md py-2 w-full px-2"
                        value={user?.displayName}
                        {...register('name')}
                    />
                </div>

                <div>
                    <label
                        className="block font-medium"
                        htmlFor="email"
                    >
                        Instructor Email
                    </label>
                    <input
                        className="border w-full rounded-md py-2 px-2"
                        value={user?.email}
                        {...register('email')}
                    />
                </div>

                <div className="flex gap-3">
                    <div>
                        <label
                            className="block font-medium"
                            htmlFor="email"
                        >
                            Available Seats
                        </label>
                        <input
                            className="border rounded-md py-2 px-2"
                            placeholder="Available Seats"
                            {...register('seats', { required: true })}
                        />
                        {errors.seats && <p>This field is required</p>}
                    </div>
                    <div>
                        <label
                            className="block font-medium"
                            htmlFor="email"
                        >
                            Price
                        </label>
                        <input
                            className="border rounded-md py-2 px-2"
                            placeholder="Price"
                            {...register('price', { required: true })}
                        />
                        {errors.price && <p>This field is required</p>}
                    </div>
                    <div className="invisible">
                        <label
                            className="block font-medium"
                            htmlFor="email"
                        >
                            Total Enrolled
                        </label>
                        <input
                            value={0}
                            {...register('totalEnrolled')}
                        />
                    </div>
                    <div className="invisible">
                        <label
                            className="block font-medium"
                            htmlFor="email"
                        >
                            Status
                        </label>
                        <input
                            className="border rounded-md py-2 px-2"
                            value="Pending"
                            {...register('status')}
                        />
                    </div>
                </div>

                <input
                    className="bg-purple-600 border-none btn block btn-success 
                    text-white"
                    value="Add a class"
                    type="submit"
                />
            </form>
        </div>
    );
};

export default AddAClass;
