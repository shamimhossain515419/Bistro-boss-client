
import { useForm } from 'react-hook-form';
import loginimg from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/Authprovider';
import Swal from 'sweetalert2';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
const Ragister = () => {
     const { creacUser } = useContext(AuthContext);
     const navigate = useNavigate();
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const onSubmit = data => {
          console.log(data);
          creacUser(data.email, data.password)
               .then(result => {
                    console.log(result.user);
                    Swal.fire('User Sing Successfully')
                    reset();
                    navigate('/');
               }).catch(error => [

                    Swal.fire({
                         icon: 'error',
                         title: `${error.massage }`,
                         text: 'Something went wrong!',
                         
                    })
               ])
     }


     return (
          <div>
               <div className=' pt-20 grid    md:grid-cols-2 gap-7 items-center justify-center'>
                    <div>
                         <img src={loginimg} alt="" />
                    </div>

                    <div className='rounded-md shadow-md   my-9 p-3 '>
                         <h1 className='  text-center text-2xl font-bold text-blue-500 '> Ragitation</h1>
                         <form onSubmit={handleSubmit(onSubmit)}>
                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2' htmlFor="Email"> Email:</label>
                                   <input  {...register("name", { required: true })} name='name' className=' mt-2  border-2 p-2   border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="text" placeholder=" name" id="" />
                                   {errors.name && <span className="text-red-500">Name is required</span>}
                              </div>
                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2' htmlFor="Email"> Photo:</label>
                                   <input  {...register("photo", { required: true })} name='photo' className=' mt-2  border-2 p-2   border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="text" placeholder=" photo" id="" />
                                   {errors.photo && <span className="text-red-500">photo is required</span>}
                              </div>
                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2' htmlFor="Email"> Email:</label>
                                   <input  {...register("email", { required: true })} aria-invalid={errors.mail ? "true" : "false"} name='email' className=' mt-2  border-2 p-2   border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="email" placeholder=" email" id="" />
                                   {errors.email && <span className="text-red-500">email is required</span>}

                              </div>
                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2' htmlFor="Email"> Password:</label>
                                   <input  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                   })} name='password' className=' mt-2  border-2 p-2   border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="password" placeholder=" password" id="" />
                                   {errors.password?.type === "required" && <p className="text-red-600">Password is required</p>}
                                   {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                   {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                   {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                   <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>
                              </div>


                              <div className=' mt-7'>
                                   <button type='submit' className=' py-2 bg-[#DBB984] text-white text-2xl font-medium block w-full rounded-lg  '> Sing in</button>
                              </div>
                              <div>
                                   <h1 className=' text-lg mt-3 text-[#DBB984] text-center font-semibold'> Already registered? <Link to={'/login'} className=' text-blue-400'> Go to log in</Link> </h1>
                              </div>
                              <div>
                                   <p className=' text-base my-5  font-medium text-center'>Or sign in with</p>
                              </div>
                              <div className=' my-3 px-2 flex gap-6  justify-center items-center'>
                                   <FaGoogle className='   cursor-pointer text-[#cf7d03] text-2xl'></FaGoogle>
                                   <FaGithub className=' cursor-pointer text-2xl'></FaGithub>
                                   <FaFacebook className=' cursor-pointer text-[#4450d5] text-2xl'></FaFacebook>
                              </div>
                         </form>


                    </div>
               </div>


          </div>
     );
};

export default Ragister;