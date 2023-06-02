import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Componets/SectionTitle";
import useCard from "../../../Hooks/UseDatauser/useCard";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";


const Mycart = () => {
     const [cart, refetch] = useCard();



     const total = cart.reduce((sum, item) => item.price + sum, 0);
    
     const handleDelete = (item) => {
          // console.log(item);
          Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`https://bistro-boss-server-ten.vercel.app/carts/${item}`, {
                         method: 'DELETE'
                    })
                         .then(res => res.json())
                         .then(data => {
                              if (data.deletedCount > 0) {
                                   refetch();
                                   Swal.fire(
                                        'Deleted!',
                                        'Your file has been deleted.',
                                        'success'
                                   )
                              }
                         })

               }
          })

     }


     return (
          <div className=" mt-4">
               <SectionTitle subTitle={"---My Cart---"} HeaderTitle={"WANNA ADD MORE?"}> </SectionTitle>

               <div className=" shadow-md p-4 rounded-md">
                    <div className=" text-black flex justify-evenly items-center  my-5">
                         <h1 className="text-3xl font-semibold"> Total items {cart.length} </h1>
                         <h1 className="text-3xl font-semibold"> Total Price ${total.toFixed(2)} </h1>

                         <Link to={'/dashboard/payment'}>
                         <button  className=" text-2xl font-bold py-2 px-4 rounded  text-white bg-[#D1A054]">PAY</button>
                         </Link>
                    </div>



                    <div>
                         <div className="overflow-x-auto w-full">
                              <table className="table w-full">
                                   {/* head */}
                                   <thead className="bg-[#D1A054] ">
                                        <tr className="bg-[#D1A054] ">
                                             <th>
                                                  #
                                             </th>
                                             <th>Image items</th>
                                             <th>Name items</th>
                                             <th>Price items</th>
                                             <th>Action</th>

                                        </tr>
                                   </thead>
                                   <tbody>
                                        {
                                             cart.map((item, index) => (
                                                  <tr key={item._id}>
                                                       <th>
                                                            {index + 1}
                                                       </th>
                                                       <td>
                                                            <div className="avatar">
                                                                 <div className="w-20 rounded">
                                                                      <img src={item.image} />
                                                                 </div>
                                                            </div>
                                                       </td>
                                                       <td>
                                                            <p className=" text-xl font-semibold"> {item.name}</p>
                                                       </td>
                                                       <td> ${item.price}</td>
                                                       <th>
                                                            <button onClick={() => handleDelete(item._id)} className=" bg-[#ea1919] text-white p-2 rounded"><FaTrashAlt></FaTrashAlt></button>
                                                       </th>
                                                  </tr>
                                             ))
                                        }


                                   </tbody>



                              </table>
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default Mycart;