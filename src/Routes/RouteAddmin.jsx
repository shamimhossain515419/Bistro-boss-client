import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import useAdmin from "../Hooks/UseDatauser/useAdmin";
import { Navigate, useLocation } from "react-router-dom";


const RouteAddmin = ({ children  }) => {
     const { user,loading } = useContext(AuthContext);
     const location=useLocation();
     const [isAdmin, isAdminLoading] = useAdmin();
     if (loading || isAdminLoading) {
          return <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
               <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                    <div className="flex justify-center">
                         <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                              <span className="sr-only">Loading...</span>
                         </div>
                    </div>
               </div>
          </div>
     }

     if(user && isAdmin){
           return children 
     }

 return  <Navigate to={'/login'}   state={{from: location}}></Navigate>
};

export default RouteAddmin;