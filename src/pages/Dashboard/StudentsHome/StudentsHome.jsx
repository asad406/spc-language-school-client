import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const StudentsHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center">Welcome <span className="text-purple-600">{user?.displayName}</span></h1>
        </div>
    );
};

export default StudentsHome;