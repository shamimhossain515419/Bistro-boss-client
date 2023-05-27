import Cardmenu from "../../../Componets/Cardmenu";


const OrderCard = ({items}) => {
     console.log(items);
     return (
          <div className=" grid md:grid-cols-3 gap-6 ">
               {
                items &&   items.map(itam=><Cardmenu item={itam} key={itam._id}></Cardmenu> )
               }
                 
          </div>
     );
};

export default OrderCard;