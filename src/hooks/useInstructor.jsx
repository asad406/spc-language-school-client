import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxios();
    
    const {data: isInstructor, isLoading: instructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            // console.log(res)
            return res.data.instructor;
        }
    })
    return [isInstructor, instructorLoading]
};

export default useInstructor;