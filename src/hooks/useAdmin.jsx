import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxios();
    
    const {data: isAdmin, isLoading: adminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log(res)
            return res.data.admin;
        }
    })
    return [isAdmin, adminLoading]
};

export default useAdmin;