import { useContext } from 'react';
import useAxios from '../../../hooks/useAxios';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const [axiosSecure] = useAxios();
    const { loading } = useContext(AuthContext);

    const { data: paymentHistory = [] } = useQuery({
        queryKey: ['paymentHistory'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('paymenthistory');
            return res.data;
        },
    });
    return (
        <div>
            <h1 className="text-4xl py-10 font-semibold">
                Total: {paymentHistory?.length} Payments.
            </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-semibold bg-slate-500 text-[14px] text-white">
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Payment Amount</th>
                            <th>Payment Date</th>
                            <th>Payment Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory.map((pay, index) => (
                            <tr key={pay._id}>
                                <th>{index + 1}</th>

                                <td>{pay?.className}</td>
                                <td>{pay?.instructorName}</td>
                                <td>${pay?.amount}</td>
                                <td>{pay?.date}</td>
                                <td>{pay?.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
