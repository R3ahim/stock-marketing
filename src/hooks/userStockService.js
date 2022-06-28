import { useEffect, useState } from "react";

const useStockService = () =>{
    const [stockServices, setStockServices] = useState([]);

    useEffect( ()=>{
        fetch(' https://lit-inlet-45861.herokuapp.com/stockService')
        .then(res => res.json())
        .then(data => setStockServices(data));
    }, []);
    return [stockServices, setStockServices]
}

export default useStockService;
