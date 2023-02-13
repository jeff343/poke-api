import { useState, useEffect } from "react";
import { baseUrl } from "../data/baseUrl";

const useFetchAll = (str) => {
    const [ allData, setAllData ] = useState();

    useEffect(() => {
        setAllData();

        const getAllData = async() => {
            try {
                const res = await fetch(baseUrl + str);
                const data = await res.json();
                setAllData(data.results);
            } catch (error) {
                console.log(error);
            };
        };

        getAllData();

    }, [str])

    return allData;
};

export default useFetchAll;