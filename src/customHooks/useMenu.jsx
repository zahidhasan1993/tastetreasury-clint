import { useEffect, useState } from "react";

const useMenu = () => {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            setItems(data)
            setLoader(false)
        })
    },[])

    return [items,loader]
}

export default useMenu