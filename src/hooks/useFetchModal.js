import { useState, useEffect } from "react";

const useFetchModal = (url) => {
    const [ modalData, setModalData ] = useState();

    useEffect(() => {

        const getModal = async() => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setModalData(data);
            } catch (error) {
                console.log(error);
            };
        };

        getModal();

    }, [url])

    return modalData;
};

export default useFetchModal;