import { useEffect, useState } from "react";
import SectionTitle from "../../../../Componets/SectionTitle";


const SaladManu = () => {
     const [items, setITems] = useState([]);

     useEffect(() => {
          fetch("http://localhost:5000/menu").then(res => res.json())
               .then(data => {
                    const populorManu = data.filter(item => item.category === "salad")
                    setITems(populorManu)
               })
     }, [])
     console.log(items);

     return (
          <section className=" my-10">

               <div className=" my-8">
                    <SectionTitle subTitle={"---Should Try---"} HeaderTitle={"CHEF RECOMMENDS"}>

                    </SectionTitle>
               </div>
               <div className=" grid md:grid-cols-3  gap-10">
                    {
                         items.map(item =>   <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                         <figure><img src={item.image} alt="Shoes" /></figure>
                         <div className="card-body text-center" >
                              <h2 className=" text-2xl font-semibold my-1 text-center">{item.name}</h2>
                              <p>{item.recipe}</p>
                            
                              <button className="btn btn-outline  btn-primary border-0 border-b-4 ">Buy Now</button>
                             
                         </div>
                    </div>  )
                    }
               </div>



             
          </section>

     );
};

export default SaladManu;