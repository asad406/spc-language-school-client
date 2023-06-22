import {
    FaBook,
    FaBookMedical,
    FaBookReader,
    FaCheckSquare,
    FaHistory,
    FaHome,
    FaPenNib,
    FaSignOutAlt,
    FaUsers,
} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const { logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleLogOut = () => {
        logOut().then(
            Swal.fire({
                position: 'top',
                icon: 'info',
                title: 'Log Out Successful',
                showConfirmButton: false,
                timer: 1500
              })
        ).catch();
    };
    return (
        <div className="drawer md:drawer-open">
            <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
            />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button md:hidden"
                >
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 h-full text-white font-semibold bg-slate-700 ">
                    {/* Sidebar content here */}

                    {isAdmin ? (
                        <>
                            <h2 className="my-2 font-semibold text-xl text-center">
                                Admin Dashboard
                            </h2>
                            <li>
                                <NavLink to="/dashboard/adminhome">
                                    <FaHome></FaHome> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageclasses">
                                    <FaBookReader></FaBookReader> Manage Classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageusers">
                                    <FaUsers></FaUsers> Manage Users
                                </NavLink>
                            </li>
                        </>
                    ) : isInstructor ? (
                        <>
                            <h2 className="my-2 font-semibold text-xl text-center">
                                Instructor Dashboard
                            </h2>
                            <li>
                                <NavLink to="/dashboard/instructorhome">
                                    <FaHome></FaHome> Instructor Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addaclass">
                                    <FaBookMedical></FaBookMedical> Add a Class
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myclasses">
                                    <FaBook></FaBook> My Classes
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <h2 className="my-2 font-semibold text-xl text-center">
                                Student Dashboard
                            </h2>
                            <li>
                                <NavLink to="/dashboard/studenthome">
                                    <FaHome></FaHome> Student Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myselectedclasses">
                                    <FaBook></FaBook> My Selected Classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/enrolledclasses">
                                    <FaCheckSquare></FaCheckSquare> My Enrolled Classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/paymenthistory">
                                    <FaHistory></FaHistory> Payment History
                                </NavLink>
                            </li>
                        </>
                    )}

                    {/* This section for all */}
                    <hr className="mt-3" />
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/instructors">
                            <FaPenNib></FaPenNib> Instructors
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/classes">
                            <FaBookReader></FaBookReader> Classes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={handleLogOut}
                            to={'/'}
                        >
                            <FaSignOutAlt></FaSignOutAlt> Log Out
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
