import { Helmet } from "react-helmet-async";
import Banner from "../Banner";
import Category from "../Category/Category";
import Frommanu from "../FromNamu/Frommanu";

import PopularManu from "../PopularManu";
import SefeRecipe from "../SefeRecipe";
import Testromonial from "../Testominitl/Testromonial";
import SaladManu from "./SaladManu/SaladManu";


const Home = () => {
     return (
          <div className="">
               <Helmet>
               <title>Bistro boss  | Home</title>
                  
               </Helmet>
             <Banner></Banner>   
             <Category></Category>
             <SefeRecipe></SefeRecipe>
             <PopularManu></PopularManu>

              <div>
                <div className=" w-full  h-44 my-16  bg-[#151515]  rounded-md flex items-center justify-center ">
                    <h1 className=" text-5xl font-semibold  text-white"> Call Us: +88 0192345678910</h1>
                </div>
              </div>
               <SaladManu></SaladManu>
               <Frommanu></Frommanu>
               <Testromonial></Testromonial>
          </div>
     );
};

export default Home;