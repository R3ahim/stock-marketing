import { useEffect, useState } from "react";

const useServiceDetail = serviceId =>{
    const [stockService, setStockService] = useState({});

    useEffect( () =>{
        const url = ` https://lit-inlet-45861.herokuapp.com/stockService/${serviceId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setStockService(data));

    }, [serviceId]);
    return [stockService]
}

export default useServiceDetail;