import { useEffect, useState } from "react";

const useMenu = () => {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            setItems(data)
            setLoader(false)
        })
    },[])

    return [items,loader]
}

export default useMenu