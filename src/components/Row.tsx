
import React,{useState,useEffect} from 'react';
import axios from '../axios';

type RowProps = {
    title: string
    fetchUrl: string
}
export const Row = ({title, fetchUrl}: RowProps) => {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },[fetchUrl]);
  return (
    <div>

     <h2>{title}</h2> 
    </div>
  )
}
