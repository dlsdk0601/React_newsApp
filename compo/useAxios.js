import React, { useState, useEffect } from "react";
import axios from "axios";


const getNew = async () => {
    const responsive = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=7f07124bab5f45208ce589bceb392ebc",{
        method: "GET",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    })

    return responsive;
}

const useAxios = () =>{
    
    const [data, setData] = useState(null);
    
    useEffect( () => {
        getNew().then( res => { setData(res.data) });
    }, [])
    console.log(data);
    return data;
}

export default useAxios;