import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import Swal from 'sweetalert2';
import ToggleButton from '../../../components/ToggleButton/ToggleButton';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

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

    const navItems = (
        <>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/instructors'}>Instructors</Link>
            </li>
            <li>
                <Link to={'/classes'}>Classes</Link>
            </li>
            {isAdmin ? (
                <li>
                    <Link to={'/dashboard/adminhome'}>Dashboard</Link>
                </li>
            ) : isInstructor ? (
                <li>
                    <Link to={'/dashboard/instructorhome'}>Dashboard</Link>
                </li>
            ) : user ? (
                <li>
                    <Link to={'/dashboard/studenthome'}>Dashboard</Link>
                </li>
            ) : <li></li>
        }
           
        </>
    );
    return (
        <div className="navbar bg-gray-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
                    >
                        {navItems}
                    </ul>
                </div>
                <Link
                    to="/"
                    className="btn btn-ghost normal-case font-semibold text-xl"
                >
                    SPC Language School
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <ToggleButton></ToggleButton>
                {user ? (
                    <div className="flex items-center gap-4">
                        <button className="btn btn-sm btn-neutral">
                            <Link
                                onClick={handleLogOut}
                                to={'/'}
                            >
                                Log Out
                            </Link>
                        </button>
                        <img
                            className=" rounded-full w-[50px]"
                            src={user?.photoURL}
                            alt="image"
                        />
                    </div>
                ) : (
                    <button className="btn btn-neutral btn-sm">
                        <Link to={'/login'}>Login</Link>
                    </button>
                )}
            </div>
        </div>
    );
};

export default NavBar;
