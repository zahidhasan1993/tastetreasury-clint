import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const {user, loader} = useAuth();
    // const token = localStorage.getItem('ACCESS_TOKEN');
    const axios = useAxiosSecure();
    // console.log(token);
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loader,
        queryFn: async () => {
            const res = await axios(`/cart/${user?.email}`)
            return res.data
        }
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/cart/${user?.email}`,{
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json();
        // }
    })
    return {cart,refetch}
    
};

export default useCart;