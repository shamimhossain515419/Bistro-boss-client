import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useState } from "react";


const useAdmin = () => {
     const { user } = useContext(AuthContext);
     const token=localStorage.getItem('access-token');
    
     const {isLoading, data:admin} = useQuery({
          queryKey: ['users', user?.email],
          queryFn: async () => {
          const res = await  fetch(`http://localhost:5000/users/admin/${user?.email}`, {
            headers:{
               authorization: ` bearer ${token}`
             }
          });
             return res.json();
          },
        })
       return [admin,isLoading];
};

export default useAdmin;