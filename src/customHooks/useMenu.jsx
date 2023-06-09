import { useQuery } from "react-query";

const useMenu = () => {
    // const [items,setItems] = useState([]);
    // const [loader,setLoader] = useState(true);

    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //     .then(res => res.json())
    //     .then(data => {
    //         setItems(data)
    //         setLoader(false)
    //     })
    // },[])
    const {data : items = [], refetch, isLoading: loader} = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/menu');
            return res.json()
        }
    })
    // console.log('the item is', items);
    return {items,loader,refetch}
}

export default useMenu;