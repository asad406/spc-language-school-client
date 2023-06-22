import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useInstructors = () => {
    const [axiosSecure] = useAxios();
    const {data:instructors = [], refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await axiosSecure('/instructors')
            return res.data
        }
    });
    return [instructors, refetch];
};

export default useInstructors;