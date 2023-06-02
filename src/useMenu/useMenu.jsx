import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


const useMenu = () => {
const {  data: product =[],refetch , isLoading: loading}=useQuery({
     queryKey:['menu'],
     queryFn: async ()=>{
         const res= await fetch("https://bistro-boss-server-ten.vercel.app/menu")
         return res.json();   
     }
 })
return [product,refetch,loading]
};

export default useMenu;