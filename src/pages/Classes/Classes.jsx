import { useContext } from 'react';
import useAdmin from '../../hooks/useAdmin';
import useClasses from '../../hooks/useClasses';
import useInstructor from '../../hooks/useInstructor';
import { AuthContext } from '../../providers/AuthProvider';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Classes = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [axiosSecure] = useAxios();
    const { user } = useContext(AuthContext);
    const [classes] = useClasses();
    const [isAmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const approvedClasses = classes.filter((cls) => cls.status === 'Approved');
    // console.log(approvedClasses);
    const handleSelect = (selectClass) => {
        // console.log(selectClass)
        if (user && user.email) {
            const { className, email, name, price, seats, _id } = selectClass;
            const selectedClass = {
                className,
                price,
                seats,
                selectedClassId: _id,
                instructorEmail: email,
                instructorName: name,
                email: user.email,
            };

            axiosSecure.post('/selectedclass', selectedClass).then((res) => {
                console.log(res?.data?.insertedId);
                if (res?.data?.insertedId) {
                    //TODO: refetch
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'A Class has been selected.',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
        } else {
            Swal.fire({
                title: 'Please login to select a class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login!',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center py-20">
                Our Classes.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {approvedClasses.map((approvedClass) => (
                    <div key={approvedClass._id}>
                        <div>
                            <img
                                className="object-cover w-full"
                                src={approvedClass.classImage}
                                alt=""
                            />
                            <div className={`${approvedClass?.seats ?  'bg-slate-500' :  'bg-red-500'}` }>
                                <div className="space-y-2 pl-5 py-3 md:pl-4  w-full text-white">
                                    <h2 className="text-2xl font-semibold">
                                        {approvedClass?.className}
                                    </h2>
                                    <h4>{approvedClass?.name}</h4>
                                    <h4>
                                        {approvedClass?.seats} Available seats
                                    </h4>
                                    <h4 className="text-2xl text-amber-400">
                                        ${approvedClass?.price}
                                    </h4>

                                    {isAmin ? (
                                        <button
                                            disabled
                                            className="btn btn-sm btn-secondary"
                                        >
                                            select
                                        </button>
                                    ) : isInstructor ? (
                                        <button
                                            disabled
                                            className="btn btn-sm btn-secondary"
                                        >
                                            select
                                        </button>
                                    ) : !approvedClass?.seats ? (
                                        <button
                                            disabled
                                            className="btn btn-sm btn-secondary"
                                        >
                                            select
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                handleSelect(approvedClass)
                                            }
                                            className="btn btn-sm btn-secondary"
                                        >
                                            select
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;
