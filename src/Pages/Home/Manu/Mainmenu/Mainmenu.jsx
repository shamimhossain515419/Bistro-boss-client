import Manu from "../../../../Leyout/Shared/Manubar/Manu";


const Mainmenu = ({items}) => {
     return (
          <div className=" grid md:grid-cols-2 my-7 gap-8">
            {items && items.map(item => <Manu key={item._id} item={item}></Manu>)}    
          </div>
     );
};

export default Mainmenu;