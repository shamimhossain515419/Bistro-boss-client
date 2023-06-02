import React from 'react';
import SectionTitle from '../../../Componets/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/UseDatauser/useAxiosSecure';
import Swal from 'sweetalert2';
const Imagebb_key=import.meta.env.VITE_IMAGEBB_KEY;
const AddItem = () => {
     const [axiosSecure] = useAxiosSecure()
     const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
     const Imagebb_URL=`https://api.imgbb.com/1/upload?key=${Imagebb_key}`
     const onSubmit = data => {
          const formData = new FormData();
          formData.append('image',data.image[0] );
         fetch(Imagebb_URL,{
           method:"POST",
           body:formData
         }).then(res=>res.json())
         .then(image=>{
          if(image.success){
               const imageUrl=image.data.display_url
             const {name,price,recipe,category}=data;
             const newItem={name,price:parseFloat(price),recipe,category,image:imageUrl}

             axiosSecure.post('/menu',newItem)
             .then(data=>{
               //  console.log(data.data,);
                if(data.data.insertedId){
                    Swal.fire({
                         position: 'top-end',
                         icon: 'success',
                         title: 'Add new Item success',
                         showConfirmButton: false,
                         timer: 1500
                       })
                       reset();
                }
             })
             console.log(newItem);  
          }
          
          

         })
          //  console.log(data);
     };

     console.log(watch("example")); // watch input value by passing the name of it

     return (
          <div className=" mt-3  ">

               <SectionTitle subTitle={"---What's new?---"} HeaderTitle="ADD AN ITEM"></SectionTitle>


               <div className=' md:m-4 lg:m-8 rounded-md bg-[#F3F3F3]  p-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                         <div className=' w-full my-2  '>
                              <label className=' text-xl    font-medium' htmlFor="name"> Recipe name*</label>
                              <input className=' black w-full p-2 my-2  focus:outline-blue-500 rounded' placeholder='Recipe name' {...register("name")} />
                         </div>

                         <div className=' md:flex gap-3  justify-evenly'>
                              <div className=' w-full my-2 '>
                                   <label className=' text-xl font-medium' htmlFor="name"> Category *</label>
                                   <select defaultValue={"Salad"} className=' black w-full p-2 my-2  focus:outline-blue-500 rounded' {...register("category")}>
                                        <option disabled value="Salad">pik</option>
                                        <option value="Salad">Salad</option>
                                        <option value="pizza">Pizza</option>
                                        <option value="soups">Soups</option>
                                        <option value="desserts">Desserts</option>
                                        <option value="drinks">Drinks</option>
                                   </select>
                              </div>
                              
                              <div className=' w-full my-2  '>
                                   <label className=' text-xl font-medium' htmlFor="price">  Price*</label>
                                   <input type='number' {...register("price")} className=' black w-full p-2 my-2  focus:outline-blue-500 rounded' placeholder='price ' {...register("price")} />
                              </div>
                          </div>
                         <div className=' w-full my-2  '>
                          <label className=' text-xl font-medium' htmlFor="price">  Recipe Details*</label>
                          <textarea {...register("recipe")} className=' black w-full p-2 my-2  focus:outline-blue-500 rounded'  cols={20} rows={5} placeholder='Recipe Details*' > </textarea>
                         </div>

                         <div className=' w-full my-2  '>
                            <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                         </div>

                       

                         {errors.exampleRequired && <span>This field is required</span>} 

                        <button type="submit" className=' bg-[#A2742B] text-white my-6 py-2 px-4 rounded-md'> Add Item  <FaUtensils  className=" inline-block"></FaUtensils> </button>
                         
                    </form>
               </div>

          </div>
     );
};

export default AddItem;