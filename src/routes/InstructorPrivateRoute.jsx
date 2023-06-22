import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useInstructor from "../hooks/useInstructor";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const InstructorPrivateRoute = ({children}) => {
    

const {user, loading} = useContext(AuthContext);
const[isAdmin, instructorLoading] = useInstructor();
const location = useLocation();

if(loading || instructorLoading){
    return <span className="loading loading-spinner text-secondary loading-lg text-center mt-20"></span>
}
if(user && isAdmin){
    return children;
}

    return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default InstructorPrivateRoute;