import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Componets/SectionTitle";
import useMenu from "../../../useMenu/useMenu";
import useAxiosSecure from "../../../Hooks/UseDatauser/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const MannageItem = () => {
     const [axiosSecure]=useAxiosSecure();
const [product,refetch,loading] = useMenu();

const handleDelete= (item)=>{
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
               // console.log(item);
                axiosSecure.delete(`menu/${item}`) 
                .then(res => {
                    // console.log('deleted res', res.data);
                    if (res.data.deletedCount > 0) {
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
          <div className=" my-3">
               <SectionTitle subTitle="---Hurry Up!--- " HeaderTitle="MANAGE ALL ITEMS"></SectionTitle>
          <div className=" mt-4"> 
          <div className=" shadow-md p-4 rounded-md">
                    <div className=" text-black flex justify-evenly items-center  my-5">
                         <h1 className="text-3xl font-semibold"> Total items {product.length} </h1>

                         <button className=" text-2xl font-bold py-2 px-4 rounded  text-white bg-[#D1A054]">PAY</button>

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
                                             <th>Action</th>

                                        </tr>
                                   </thead>
                                   <tbody>
                                        {
                                             product.map((item, index) => (
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
                                                       <Link to={`/dashboard/menu/${item._id}`}> <button  className=" bg-[#D1A054] text-white p-2 rounded"><FaEdit></FaEdit></button></Link>
                                                       </th>
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
         
         
          </div>
     );
};

export default MannageItem;