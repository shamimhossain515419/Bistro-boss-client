import { Link } from "react-router-dom";
import Cover from "../../../../Leyout/Shared/Conver/Cover";
import Mainmenu from "../Mainmenu/Mainmenu";


const Category = ({items, img, title, details }) => {
     return (
          <div>
           <Cover img={img} title={title} details={details}></Cover> 
          
           <Mainmenu items={items}></Mainmenu>
              <div className=' text-center'>
               <Link to={`/order/${title}`} className=' bg-[#2a1bd1bc] py-2 px-4 rounded-md text-white '> Add all  </Link>
              </div>

           </div>
     );
};

export default Category;