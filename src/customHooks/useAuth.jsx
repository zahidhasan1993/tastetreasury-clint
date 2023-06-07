import { useContext } from 'react';
import { DataProvider } from '../components/providers/AuthProvider';

const useAuth = () => {
    const auth = useContext(DataProvider);
    return auth
};

export default useAuth;