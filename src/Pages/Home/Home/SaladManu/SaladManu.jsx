import { useEffect, useState } from "react";
import SectionTitle from "../../../../Componets/SectionTitle";
import Cardmenu from "../../../../Componets/Cardmenu";


const SaladManu = () => {
     const [items, setITems] = useState([]);

     useEffect(() => {
          fetch("http://localhost:5000/menu").then(res => res.json())
               .then(data => {
                    const populorManu = data.filter(item => item.category === "salad")
                    setITems(populorManu)
               })
     }, [])
     

     return (
          <section className=" my-10">

               <div className=" my-8">
                    <SectionTitle subTitle={"---Should Try---"} HeaderTitle={"CHEF RECOMMENDS"}>

                    </SectionTitle>
               </div>
               <div className=" grid md:grid-cols-3  gap-10">
                    {
                         items.map(item => <Cardmenu item={item} key={item._id}></Cardmenu>  )
                    }
               </div>
             
          </section>

     );
};

export default SaladManu;