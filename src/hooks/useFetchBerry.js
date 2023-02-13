import { useState, useEffect } from "react";
import { baseUrl } from "../data/baseUrl";

const useFetchBerry = (query) => {
    const [ berry, setBerry ] = useState();
    const [ berryItem, setBerryItem] = useState();

    useEffect(() => {
        setBerry();
        setBerryItem();

        const getBerry = async() => {
            try {
                const res = await fetch(baseUrl + "berry/" + query);
                const data = await res.json();
                setBerry(data);
                return data;
            } catch (error) {
                console.log(error);
            };
        };

        const getBerryItem = async(url) => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setBerryItem(data);
            } catch (error) {
                console.log(error)
            };
        };

        const getAllBerry = () => {
            getBerry()
            .then(data => getBerryItem(data.item.url))
        }

        getAllBerry();

    }, [query])

    return [ berry, berryItem ];
};

export default useFetchBerry;