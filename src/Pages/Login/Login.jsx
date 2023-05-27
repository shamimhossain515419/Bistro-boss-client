
import { Link, Navigate, useNavigate } from 'react-router-dom';
import loginimg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../AuthProvider/Authprovider';
import Swal from 'sweetalert2';
import { FaFacebook, FaGit, FaGithub, FaGoogle } from 'react-icons/fa';
const Login = () => {
     const [isButtonDisabled, setButtonDisabled] = useState(true);

     const { singIn,Googlesing } = useContext(AuthContext)
const navigete=useNavigate()
     const Handalsubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;

          console.log(password);
          console.log(email);
          singIn(email, password).then(result => {
               console.log(result.user);
               Swal.fire('User login Successfully')

               form.reset();
               <Navigate to={'/'}></Navigate>
          }).catch(error => [

               Swal.fire({
                    icon: 'error',
                    title: `${error.massage}`,
                    text: 'Something went wrong!',

               })
          ])

     }

     useEffect(() => {
          loadCaptchaEnginge(6);
     }, [])

const handleGoogle=()=>{
     Googlesing().then(result => {
          console.log(result.user);
          Swal.fire('User login Successfully');
          navigete('/')
         
     }).catch(error => [
        Swal.fire({
               icon: 'error',
               title: `${error.massage}`,
               text: 'Something went wrong!',

      })
     ])
}
     const handleValidateCaptcha = (e) => {
          const user_captcha_value = e.target.value;
          if (validateCaptcha(user_captcha_value)) {
               alert(" mach capter")
               setButtonDisabled(false);
          }
          else {
               alert(" not  mach capter")

               setButtonDisabled(true)
          }
     }



     return (
          <div className=' mt-20 grid  md:grid-cols-2 gap-7 items-center justify-center'>
               <div>
                    <img src={loginimg} alt="" />
               </div>

               <div>
                    <div className=' max-w-md shadow-md p-3 rounded-md'>
                         <h1 className=' text-center text-2xl font-bold text-blue-500 '> Login </h1>
                         <form onSubmit={Handalsubmit}>
                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2' htmlFor="Email"> Email:</label>
                                   <input className=' mt-2  border-2 p-2   border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="email" name="email" placeholder=" Email" id="" />
                              </div>
                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2' htmlFor="Email"> Password:</label>
                                   <input className=' mt-2  border-2 p-2   border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="password" placeholder=" Password" name="password" id="" />
                              </div>
                              <div className=' w-full'>
                                   <label className="label">
                                        <LoadCanvasTemplate />
                                   </label>
                                   <input onBlur={handleValidateCaptcha} className=' mt-2  border-2 p-2   border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="text" placeholder="type here" name="" id="" />

                              </div>


                              <div className=' mt-7'>
                                   <button disabled={isButtonDisabled} type='submit' className=' py-2 bg-[#DBB984] text-white text-2xl font-medium block w-full rounded-lg  '> Sing in</button>
                              </div>
                              <div>
                                   <h1 className=' text-lg mt-3 text-[#DBB984] text-center font-semibold'> New here?  <Link to={'/ragister'} className=' text-blue-400'>Create a New Account</Link> </h1>
                              </div>
                              <div>
                                   <p className=' text-base my-5  font-medium text-center'>Or sign in with</p>
                              </div>
                              <div className=' my-3 px-2 flex gap-6  justify-center items-center'>
                                   <FaGoogle onClick={handleGoogle} className='   cursor-pointer text-[#cf7d03] text-2xl'></FaGoogle>
                                   <FaGithub className=' cursor-pointer text-2xl'></FaGithub>
                                   <FaFacebook className=' cursor-pointer text-[#4450d5] text-2xl'></FaFacebook>
                              </div>
                         </form>
                    </div>

               </div>
          </div>
     );
};

export default Login;