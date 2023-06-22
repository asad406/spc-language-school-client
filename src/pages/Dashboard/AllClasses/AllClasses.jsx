import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';
import useClasses from '../../../hooks/useClasses';
import { Link } from 'react-router-dom';

const AllClasses = () => {
    const [axiosSecure] = useAxios();
    const [classes, refetch] = useClasses();

    const handleApprove = (cls) => {
        console.log(cls);
        axiosSecure.patch(`classes/approve/${cls?._id}`).then((data) => {
            if (data?.data?.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `${cls?.className} Approved`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };
    const handleDeny = (cls) => {
        console.log(cls);
        axiosSecure.patch(`classes/deny/${cls?._id}`).then((data) => {
            if (data?.data?.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `${cls?.className} has been Denied`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };
    return (
        <div>
            <h1 className="text-4xl py-10 font-semibold">
                Total {classes.length} Classes
            </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-semibold bg-slate-500 text-[14px] text-white">
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Action</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((cls, index) => (
                            <tr key={cls._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={cls?.classImage}
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>{cls?.className}</td>
                                <td>{cls?.name}</td>
                                <td>{cls?.email}</td>
                                <td>{cls?.seats}</td>
                                <td>${cls?.price}</td>
                                <td>{cls?.status}</td>
                                <th>
                                    {cls?.status === 'Approved' ||
                                    cls?.status === 'Denied' ? (
                                        <button
                                            disabled
                                            className="btn btn-neutral btn-xs"
                                        >
                                            Approve
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleApprove(cls)}
                                            className="btn btn-neutral btn-xs"
                                        >
                                            Approve
                                        </button>
                                    )}
                                </th>
                                <th>
                                    {cls?.status === 'Approved' ||
                                    cls?.status === 'Denied' ? (
                                        <button
                                            disabled
                                            className="btn btn-neutral btn-xs"
                                        >
                                            Deny
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleDeny(cls)}
                                            className="btn btn-neutral btn-xs"
                                        >
                                            Deny
                                        </button>
                                    )}
                                </th>
                                <th>
                                    <Link to={`/dashboard/feedback/${cls._id}`}>
                                        <button className="btn btn-neutral btn-xs">
                                            Feedback
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

export default AllClasses;
