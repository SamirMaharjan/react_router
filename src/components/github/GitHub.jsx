import {useEffect,useState} from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub(){
    const [followers, setFollowers]=useState();
    const [data, setData]=useState();
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/SamirMaharjan").then((response)=>response.json()).then((data)=>setData(data))
    // },[]);

    const data1 = useLoaderData()
    return (
        <>
        <div className="text-white text-6xl bg-gray-600">Github Followers: {data1.followers}
        <img src={data1.avatar_url} alt="" width={300} />
        </div>
            </>
    )
}

export const githubInfoLoader= async() =>{
 const response = await fetch("https://api.github.com/users/SamirMaharjan")
 return response.json();
}