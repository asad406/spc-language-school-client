import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MySelectedClasses = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxios();

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedclass/${user?.email}`);
            // console.log(res.data)
            return res.data;
        },
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/selectedclass/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your Class has been deleted.',
                            'success'
                        );
                    }
                });
            }
        });
    };

    return (
        <div>
            <h1 className="text-4xl py-10 font-semibold">
                Total: {selectedClasses?.length} Classes Selected
            </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-semibold bg-slate-500 text-[14px] text-white">
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedClasses.map((cls, index) => (
                            <tr key={cls._id}>
                                <th>{index + 1}</th>

                                <td>{cls?.className}</td>
                                <td>{cls?.instructorName}</td>
                                <td>{cls?.instructorEmail}</td>
                                <td>${cls?.price}</td>

                                <th>
                                    {/* TODO: make update route */}
                                    <button
                                        onClick={() => handleDelete(cls?._id)}
                                        className="btn btn-neutral btn-xs"
                                    >
                                        Delete
                                    </button>
                                </th>

                                <th>
                                    <Link
                                        state={cls}
                                        to={`/dashboard/payment/${cls._id}`}
                                    >
                                        <button className="btn btn-neutral btn-xs">
                                            Pay
                                        </button>
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;
