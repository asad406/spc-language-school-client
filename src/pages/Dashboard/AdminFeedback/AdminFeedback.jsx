import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';

const AdminFeedback = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const id = useParams();
    const [axiosSecure] = useAxios();


    const onSubmit = (data) => {
        console.log(id.id)
        console.log(data.feedback);
        // const {feedback} = data;
        reset()
        axiosSecure.patch(`classes/feedback/${id?.id}`, data).then((data) => {
            console.log(data.data);
            if (data?.data?.modifiedCount) {
                // refetch();
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Feedback Send.',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
            
        
    };
    return (
        <div>
            <div className="bg-slate-300 w-full m-4 p-6 rounded-xl shadow-xl">
                <h1 className="pb-8 text-3xl text-center font-semibold">
                    Feedback
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
                            Feedback
                        </label>
                        <input
                            className="border w-full rounded-md py-2 px-2"
                            placeholder="Feedback"
                            {...register('feedback', { required: true })}
                        />
                        {errors.feedback && <p>Feedback field is required</p>}
                    </div>
                    <input
                        className="bg-purple-600 border-none btn  block btn-success 
                    text-white"
                        value="Feedback"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default AdminFeedback;
