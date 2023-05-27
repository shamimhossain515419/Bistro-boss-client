import { useState } from "react";
import Cover from "../../../Leyout/Shared/Conver/Cover";
import orderimg from '../../../assets/reservation/category-pizza.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../useMenu/useMenu";
import OrderCard from "./OrderCard";
import { useParams } from "react-router-dom";

const Order = () => {

     const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
     const { category } = useParams();
     const initialIndex = categories.indexOf(category);
     console.log(initialIndex);
     const [tabIndex, setTabIndex] = useState(initialIndex);
     const [product] = useMenu();
     const drinks = product.filter(pd => pd.category == "drinks");
     const dessert = product.filter(pd => pd.category == "dessert");
     const pizza = product.filter(pd => pd.category == "pizza");
     const salad = product.filter(pd => pd.category == "salad");
     const soup = product.filter(pd => pd.category == "soup");
     console.log(drinks);

     return (
          <div>
               <Cover img={orderimg} title={" Our  Order "} details={"Would like to try dist"}> </Cover>

               <div className="mt-10">

                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                         <TabList>
                              <Tab>Salad</Tab>
                              <Tab>pizza</Tab>
                              <Tab>soups</Tab>
                              <Tab>desserts</Tab>
                              <Tab>drinks</Tab>
                         </TabList>
                         <TabPanel>
                              <OrderCard items={salad}> </OrderCard>
                         </TabPanel>
                         <TabPanel>
                              <OrderCard items={pizza}> </OrderCard>
                         </TabPanel>
                         <TabPanel>
                              <OrderCard items={soup}> </OrderCard>
                         </TabPanel>
                         <TabPanel>
                              <OrderCard items={dessert}> </OrderCard>
                         </TabPanel>
                         <TabPanel>
                              <OrderCard items={drinks}> </OrderCard>
                         </TabPanel>
                    </Tabs>
               </div>

          </div>
     );
};

export default Order;