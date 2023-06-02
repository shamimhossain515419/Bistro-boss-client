import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FaTrashAlt, FaUserShield, FaUsers } from 'react-icons/fa';
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/Authprovider";


const Allusers = () => {
     const { user } = useContext(AuthContext);
     const token=localStorage.getItem('access-token');
     const { data: users = [], refetch } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const data = await fetch('https://bistro-boss-server-ten.vercel.app/users',{
                     headers:{
                         authorization: ` bearer ${token}`
                     }
               })
               return data.json();
          },
     })

     const handleAdmin = (item) => {
         fetch(`https://bistro-boss-server-ten.vercel.app/users/admin/${item._id}`,
         {
           method:"PATCH"
         }).then(res=>res.json())
         .then(data=>{
            if(data.modifiedCount){
               refetch();
               Swal.fire({
                   position: 'top-end',
                   icon: 'success',
                   title: `${item.name} is an Admin Now!`,
                   showConfirmButton: false,
                   timer: 1500
                 })
            }
         })
     }
     const handleDelete = (item) => {
          fetch(`https://bistro-boss-server-ten.vercel.app/users/${item}`,{
                method:"DELETE"
          })
          .then(res=>res.json())
          .then(data=> {
                if(data.deletedCount){
                    refetch();
                    Swal.fire({
                         position: 'top-end',
                         icon: 'success',
                         title: `${item.name} is an Delete Now!`,
                         showConfirmButton: false,
                         timer: 1500
                       }) 
                }
              
          })
     }

     if(user == null){
           return 
     }
     return (
          <div>
               <h1 className=" text-3xl  ml-6 font-semibold my-3"> Total Users:  {users.length} </h1>
               <div>
                    <div className="overflow-x-auto">
                         <table className="table w-full">
                              {/* head */}
                              <thead>
                                   <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Acton</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {
                                        users?.map((item, index) =>
                                             <tr key={item._id}>
                                                  <th>{index + 1}</th>
                                                  <td>{item.name}</td>
                                                  <td>{item.email}</td>

                                                  <td>
                                                       {
                                                            item.role == "admin" ? "Admin" :

                                                                 <button onClick={() => handleAdmin(item)} className=" bg-[#D1A054] text-white p-2 rounded"><FaUserShield></FaUserShield></button>
                                                       }
                                                  </td>
                                                  <td>
                                                       <button onClick={() => handleDelete(item._id)} className=" bg-[#ea1919] text-white p-2 rounded"><FaTrashAlt></FaTrashAlt></button>
                                                  </td>
                                             </tr>
                                        )
                                   }


                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
     );
};

export default Allusers;