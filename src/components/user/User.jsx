import React from "react";
import { useParams } from "react-router-dom";
export default function User(){
    const {userid} = useParams()
  return  <h1 className="text-white text-6xl bg-gray-600">User: {userid}</h1>
}