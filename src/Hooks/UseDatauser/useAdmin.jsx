import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
   const { user } = useContext(AuthContext);
  
   const [axiosSecure] = useAxiosSecure();
   const { data: isAdmin, isLoading: isAdminLoading} = useQuery({
      queryKey: ['users', user?.email],
      queryFn: async () => {
         const res = await axiosSecure.get(`/users/admin/${user?.email}`);
         return res.data.admin;
      },
   })
   return [isAdmin, isAdminLoading];
};

export default useAdmin;