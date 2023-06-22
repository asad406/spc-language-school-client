import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const [axiosSecure] = useAxios();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('users');
        return res.data;
    });

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`users/admin/${user._id}`).then((data) => {
            console.log(data.data);
            if (data?.data?.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'User is now Admin',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    const handleMakeInstructor = (user) => {
        axiosSecure.patch(`users/instructor/${user._id}`).then((data) => {
            console.log(data.data);
            if (data?.data?.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'User is now Instructor',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    return (
        <div>
            <h1 className="text-3xl py-10 font-semibold">
                Total: {users.length} Users
            </h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-base text-white bg-slate-500">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? (
                                        <button
                                            disabled
                                            className="btn btn-sm"
                                        >
                                            Admin
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                handleMakeAdmin(user)
                                            }
                                            className="btn btn-info btn-sm bg-purple-500
                                            border-none lowercase  text-white"
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {user.role === 'instructor' ? (
                                        <button
                                            disabled
                                            className="btn btn-sm btn-ghost bg-orange-600  text-white"
                                        >
                                            Instructor
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                handleMakeInstructor(user)
                                            }
                                            className="btn btn-warning btn-sm bg-orange-500  text-white"
                                        >
                                            Make Instructor
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
