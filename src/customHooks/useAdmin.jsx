import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axios = useAxiosSecure();

  const { data: admin, isLoading , refetch } = useQuery({
    queryKey: ['admin', user?.email],
    queryFn: async () => {
        const res = await axios(`/user/admin/${user?.email}`)
        return res.data.admin
    }
   
})
return {admin,refetch,isLoading}
};

export default useAdmin;
