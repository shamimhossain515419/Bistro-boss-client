import { Helmet } from "react-helmet-async";
import Cover from "../../../../Leyout/Shared/Conver/Cover";

import img from '../../../../assets/menu/banner3.jpg'
import dessertimg from '../../../../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../../../assets/menu/pizza-bg.jpg'
import saladimg from '../../../../assets/menu/salad-bg.jpg'
import soupimg from '../../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../../useMenu/useMenu";
import SectionTitle from "../../../../Componets/SectionTitle";
import Mainmenu from "../Mainmenu/Mainmenu";
import Category from "./Category";

const ManuOur = () => {

  const [product,refetch,loading] = useMenu();
  console.log(product);
  const offered = product.filter(pd => pd.category == "offered");
  const dessert = product.filter(pd => pd.category == "dessert");
  const pizza = product.filter(pd => pd.category == "pizza");
  const salad = product.filter(pd => pd.category == "salad");
  const soup = product.filter(pd => pd.category == "soup");
  //  console.log(offered);
  return (
    <div className="">
      <Helmet>
        <title>Bistro boss  | Menu</title>

      </Helmet>
      <div className="">
        <Cover img={img} title={"OUR MENU"} details={"Would you like a try dist"}></Cover>
      </div>


      <div>
        <SectionTitle subTitle="---Don't miss---" HeaderTitle="TODAY'S OFFER"></SectionTitle>

        <div>

        </div>
        <Mainmenu items={offered}></Mainmenu>
      </div>

      <div className="my-3">
        <Category items={dessert} img={dessertimg} title={"dessert"} details={"Would you like a try dist"}></Category>


      </div>
      <div className="my-3">

        <Category items={pizza} img={pizzaimg} title={"pizza"} details={"Would you like a try dist"}></Category>

      </div>
      <div className="my-3">

        <Category items={salad} img={saladimg} title={"salad"} details={"Would you like a try dist"}></Category>

      </div>
      <div className="my-3">
        <Category items={soup} img={soupimg} title={"soup"} details={"Would you like a try dist"}></Category>

      </div>

    </div>
  );
};

export default ManuOur;