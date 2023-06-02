import React from 'react';
import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Authprovider';
import Swal from 'sweetalert2';

const SocaleLogin = () => {

     const { Googlesing } = useContext(AuthContext);
     const location = useLocation(); 
     const navigete = useNavigate()
     let from = location.state?.from?.pathname || "/";
     const handleGoogle = () => {
          Googlesing().then(result => {
               const user=result.user;
               // console.log(user);
               const saveuser={name:user.displayName, email:user.email};
                 fetch('https://bistro-boss-server-ten.vercel.app/user',
                   {
                     method:"POST",
                     headers:{
                          'content-type':'application/json'
                     },
                     body:JSON.stringify(saveuser)
                   }
                  ).then(res=>res.json()).then(()=>{
               
                         Swal.fire('User login Successfully');
                        navigete(from)   
                     
                 })
              

          }).catch(error => [
               Swal.fire({
                    icon: 'error',
                    title: `${error.massage}`,
                    text: 'Something went wrong!',

               })
          ])
     }

     return (
          <div>
               <div className=' my-3 px-2 flex gap-6  justify-center items-center'>
                    <FaGoogle onClick={handleGoogle} className='   cursor-pointer text-[#cf7d03] text-2xl'></FaGoogle>
                    <FaGithub className=' cursor-pointer text-2xl'></FaGithub>
                    <FaFacebook className=' cursor-pointer text-[#4450d5] text-2xl'></FaFacebook>
               </div>
          </div>
     );
};

export default SocaleLogin;