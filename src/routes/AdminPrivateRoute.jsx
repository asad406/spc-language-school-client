import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

// eslint-disable-next-line react/prop-types
const AdminPrivateRoute = ({children}) => {

const {user, loading} = useContext(AuthContext);
const[isAdmin, adminLoading] = useAdmin();
const location = useLocation();

if(loading || adminLoading){
    return <span className="loading loading-spinner text-secondary loading-lg text-center mt-20"></span>
}
if(user && isAdmin){
    return children;
}

    return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default AdminPrivateRoute;