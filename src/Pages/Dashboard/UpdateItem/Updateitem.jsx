import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../Componets/SectionTitle';

const Updateitem = () => {
     const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
     const menuData = useLoaderData();
     // console.log(menuData);
     const { name, _id, price, recipe, image,category } = menuData;
 
      const onSubmit=(data)=>{
          //  console.log(data);
      }

     return (
          <div>
               <div className=" mt-3  ">

                    <SectionTitle subTitle={"---Update Data"} HeaderTitle="UPDATE ITEM"></SectionTitle>


                    <div className=' md:m-4 lg:m-8 rounded-md bg-[#F3F3F3]  p-4'>
                         <form onSubmit={handleSubmit(onSubmit)}>
                              <div className=' w-full my-2  '>
                                   <label className=' text-xl    font-medium' htmlFor="name"> Recipe name*</label>
                                   <input defaultValue={name} className=' black w-full p-2 my-2  focus:outline-blue-500 rounded' placeholder='Recipe name' {...register("name")} />
                              </div>

                              <div className=' md:flex gap-3  justify-evenly'>
                                   <div className=' w-full my-2 '>
                                        <label className=' text-xl font-medium' htmlFor="name"> Category *</label>
                                        <select defaultValue={category} className=' black w-full p-2 my-2  focus:outline-blue-500 rounded' {...register("category")}>
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
                                        <input defaultValue={price} type='number' {...register("price")} className=' black w-full p-2 my-2  focus:outline-blue-500 rounded' placeholder='price ' {...register("price")} />
                                   </div>
                              </div>
                              <div className=' w-full my-2  '>
                                   <label className=' text-xl font-medium' htmlFor="price">  Recipe Details*</label>
                                   <textarea {...register("recipe")} className=' black w-full p-2 my-2  focus:outline-blue-500 rounded' cols={20} rows={5} placeholder='Recipe Details*' > </textarea>
                              </div>

                              <div className=' w-full my-2  '>
                                   <input   {...register("image")} type="file" className="file-input w-full max-w-xs" />
                              </div>



                              {errors.exampleRequired && <span>This field is required</span>}

                              <button type="submit" className=' bg-[#A2742B] text-white my-6 py-2 px-4 rounded-md'> Add Item  <FaUtensils className=" inline-block"></FaUtensils> </button>

                         </form>
                    </div>

               </div>
          </div>
     );
};

export default Updateitem;