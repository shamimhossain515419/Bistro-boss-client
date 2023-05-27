

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slider1  from '../../../assets/home/slide1.jpg'
import slider2  from '../../../assets/home/slide2.jpg'
import slider3  from '../../../assets/home/slide3.jpg'
import slider4  from '../../../assets/home/slide4.jpg'
import slider5  from '../../../assets/home/slide5.jpg'


// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../Componets/SectionTitle";

const Category = () => {
     return (
          <div className=" my-8">

            <div>
              <SectionTitle HeaderTitle={"ORDER ONLINE"} 
               subTitle={"---From 11:00am to 10:00pm---"}></SectionTitle> 
            </div>
              <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h1 className=" text-center text-white text-3xl font-semibold  uppercase  -mt-16"> Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider2} alt="" />
        <h1 className=" text-center text-white text-3xl font-semibold  uppercase  -mt-16"> Soups</h1>

        </SwiperSlide>
        <SwiperSlide>
        <img src={slider3} alt="" />
        <h1 className=" text-center text-white text-3xl font-semibold  uppercase  -mt-16"> pizzas</h1>

        </SwiperSlide>
        <SwiperSlide>
        <img src={slider4} alt="" />
        <h1 className=" text-center text-white text-3xl font-semibold  uppercase  -mt-16"> desserts</h1>

        </SwiperSlide>
        <SwiperSlide>
        <img src={slider5} alt="" />
        <h1 className=" text-center text-white text-3xl font-semibold  uppercase  -mt-16"> Salads</h1>

        </SwiperSlide>
       
      </Swiper>  
    </div>
     );
};

export default Category;