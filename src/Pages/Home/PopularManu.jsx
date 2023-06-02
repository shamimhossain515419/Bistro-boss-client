import { useEffect, useState } from "react";
import SectionTitle from "../../Componets/SectionTitle";
import Manu from "../../Leyout/Shared/Manubar/Manu";
import Mainmenu from "./Manu/Mainmenu/Mainmenu";
import useMenu from "../../useMenu/useMenu";


const PopularManu = () => {
  
   const [product,refetch,loading]=useMenu();
   const items=product.filter(item=>item.category=="popular")

     return (
          <div>

               <div className=" my-7">
                    <SectionTitle subTitle={"Check it out"} HeaderTitle={"FROM OUR MENU"}></SectionTitle>
               </div >

               
                   <Mainmenu items={items}></Mainmenu>
              
          </div>
     );
};

export default PopularManu;