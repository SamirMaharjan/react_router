import {useEffect,useState} from "react";

export default function GitHub(){
    const [followers, setFollowers]=useState();
    useEffect(()=>{
        fetch("https://api.github.com/users/SamirMaharjan").then((response)=>response.json()).then((data)=>setFollowers(data['followers']))
    },[])
    return (
        <>
        <h1 className="text-white text-6xl bg-gray-600">Github Followers: {followers}</h1>
            </>
    )
}