import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";
import { useQuery } from "@tanstack/react-query";


const useCard = () => {
     const { user } = useContext(AuthContext);
    const token=localStorage.getItem('access-token');
    
    const {refetch, data:cart=[]} = useQuery({
          queryKey: ['carts', user?.email],
          queryFn: async () => {
          const res = await  fetch(`https://bistro-boss-server-ten.vercel.app/carts?email=${user?.email}`, {
            headers:{
               authorization: ` bearer ${token}`
             }
          });
             return res.json();
          },
        })
  
  return [cart, refetch]
};

export default useCard;