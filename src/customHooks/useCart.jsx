import { useContext } from 'react';
import { DataProvider } from '../components/providers/AuthProvider';
import { useQuery } from 'react-query';

const useCart = () => {
    const {user} = useContext(DataProvider);
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart/${user?.email}`)

            return res.json();
        }
    })
    return {cart,refetch}
};

export default useCart;