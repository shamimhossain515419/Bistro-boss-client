import { useEffect, useState } from "react";
import SectionTitle from "../../../Componets/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";


const Testromonial = () => {

     const [reaveiws, setReaveiw] = useState([]);

     useEffect(() => {
          fetch('http://localhost:5000/review').then(res => res.json())
               .then(data => setReaveiw(data))
     }, []);


     return (
          <section>


               <div className=" my-2">
                    <SectionTitle subTitle={"---What Our Clients Say---"} HeaderTitle={"TESTIMONIALS"}></SectionTitle>
               </div>

               <div >

                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">

                         {
                              reaveiws && reaveiws.map(review => <SwiperSlide key={review._id}>
                                   <div className="mx-24 flex justify-center  items-center my-16 text-center">
                                        <div>
                                             <div className=" mt-2 mx-auto w-full text-center">
                                             <Rating className=" mx-auto"
                                                  style={{ maxWidth: 180 }}
                                                  value={review.rating}
                                                  readOnly
                                             />
                                             </div>
                                             <p className=" my-3"> {review.details} </p>
                                             <h1 className=" text-3xl font-semibold  text-orange-500 my-1"> {review.name} </h1>
                                        </div>
                                   </div>
                              </SwiperSlide>)
                         }




                    </Swiper>
               </div>
          </section>
     );
};

export default Testromonial;