import SectionTitle from "../../../Componets/SectionTitle";
 import './Frommanu.css'
 import featuredimge from '../../../assets/home/featured.jpg'
const Frommanu = () => {
     return (
          <div className="frommanu">

               <div>
                    <SectionTitle subTitle={"Chacke Out"} HeaderTitle={"From Manu"}></SectionTitle>
               </div>

               <div className="  md:w-4/5 mx-auto flex gap-5 items-center justify-center ">
                    <div className=" w-full ">
                         <img className=" md:h-80 -ml-8 w-full  rounded-2xl " src={featuredimge} alt="" />
                    </div>
                    <div className=" text-white space-y-2 ">
                        <h1 className=" text-xl font-medium"> March 20, 2023</h1>  
                       <h1 className=" text-xl font-medium"> WHERE CAN I GET SOME?</h1>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                     <button className=" btn btn-outline  mt-8 border-0   border-b-4  text-white "> Order now</button>
                    </div>
               </div>

          </div>
     );
};

export default Frommanu;