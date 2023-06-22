import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useClasses = () => {

    const [axiosSecure] = useAxios();
    const {data: classes = [], refetch} =useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await axiosSecure('/classes')
            return res.data;
        }
    })

    return [classes,refetch]
};

export default useClasses;