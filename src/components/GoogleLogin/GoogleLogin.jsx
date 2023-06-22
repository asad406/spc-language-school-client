import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useAxios from '../../hooks/useAxios';

const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogIn = () => {
        googleSignIn().then((result) => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const saveUser = {
                name: loggedInUser.displayName,
                email: loggedInUser.email,
                photo: loggedInUser.photoURL
            };
            axiosSecure.post('/users',saveUser)
            .then(() => {
                navigate(from, { replace: true });
            });
        });
    };

    return (
        <div>
            <div className="w-full text-center ">
                <button
                    onClick={handleGoogleLogIn}
                    className="btn btn-neutral text-white"
                >
                    <FaGoogle></FaGoogle>
                    google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;
