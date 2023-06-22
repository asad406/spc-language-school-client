import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const EnrolledClasses = () => {
    const [axiosSecure] = useAxios();
    const { loading } = useContext(AuthContext);

    const { data: enrolledclasses = [] } = useQuery({
        queryKey: ['enrolledClass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/enrolledclass');
            return res.data;
        },
    });
    return (
        <div>
            <h1 className="text-4xl py-10 font-semibold">
                Total: {enrolledclasses?.length} Classes Enrolled
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
                        </tr>
                    </thead>
                    <tbody>
                        {enrolledclasses.map((cls, index) => (
                            <tr key={cls._id}>
                                <th>{index + 1}</th>
                                <td>{cls?.className}</td>
                                <td>{cls?.instructorName}</td>
                                <td>{cls?.instructorEmail}</td>
                                <td>${cls?.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;
