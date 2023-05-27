import moment from 'moment';
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
     return (
          <div className=" max-w-screen-xl mx-auto">
                <div className="w-full grid grid-cols-2">
                <div className=" flex justify-center items-center  p-10 text-white bg-[#1f2937c9] ">
                     <div>
                     <h1 className=" text-4xl font-bold"> CONTACT US</h1>
                      <p className=" text-base font-normal my-1 mt-2"> 123 ABS Street, Uni 21, Bangladesh</p>
                      <p className=" text-base font-normal my-1">+88 123456789 </p>
                      <p className=" text-base font-normal my-1"> Mon - Fri: 08:00 - 22:00</p>
                      <p className=" text-base font-normal my-1">Sat - Sun: 10:00 - 23:00</p>
                     </div>
                   </div>
                <div className=" flex justify-center items-center  p-10 text-white bg-[#1f2937] ">
                     <div>
                     <h1 className=" text-4xl font-bold"> Follow US</h1>
                     <p className=" text-base font-normal my-1">Join us on social media</p>
                      
                     <div className=' flex gap-3 items-center '>
                         <FaFacebook></FaFacebook>
                         <FaTwitter></FaTwitter>
                         <FaYoutube></FaYoutube>
                         <FaGoogle></FaGoogle>
                     </div>
                     </div>
                   </div>
               </div>
               <div className=" footer-center p-4 bg-base-300 text-base-content">
                    <div>
                   
                         <p>Copyright © {
                      moment().format("YYYY")
                   } - All right reserved by ACME Industries Ltd</p>
                    </div>
               </div>
          </div>
     );
};

export default Footer;