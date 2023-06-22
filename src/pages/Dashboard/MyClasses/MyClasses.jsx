import useClasses from '../../../hooks/useClasses';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [classes] = useClasses();
    const myClses = classes.filter((myCls) => myCls.email === user.email);
    return (
        <div>
            <h1 className="text-4xl py-10 font-semibold">
                Total: {myClses.length} Classes
            </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-semibold bg-slate-500 text-[14px] text-white">
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Available Seats</th>
                            <th>Total Enrolled</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myClses.map((cls, index) => (
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
                                <td>{cls?.seats}</td>
                                <td>{cls?.totalEnrolled}</td>
                                <td>${cls?.price}</td>
                                <td>{cls?.status}</td>
                                <td>
                                    {cls?.status === 'Approved' ||
                                    cls?.status === 'Pending'
                                        ? ''
                                        : cls?.feedback}
                                </td>
                                <th>
                                    {/* TODO: make update route */}
                                    <Link to={`/dashboard/feedback/${cls._id}`}>
                                        <button className="btn btn-neutral btn-xs">
                                            Update
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

export default MyClasses;
