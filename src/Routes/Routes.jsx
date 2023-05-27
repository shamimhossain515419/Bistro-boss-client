import { createBrowserRouter } from "react-router-dom";
import Main from "../Leyout/Main";
import Home from "../Pages/Home/Home/Home";
import ManuOur from "../Pages/Home/Manu/Manu/ManuOur";
import Order from "../Pages/Orders/Orders/Order";
import Login from "../Pages/Login/Login";
import Ragister from "../Pages/Login/Ragister";

const Router = createBrowserRouter([
     {
       path: "/",
       element: <Main></Main>,
        children:[
          {
               path:'/',
               element:<Home></Home>
          },
          {
             path:'/menu',
             element:<ManuOur></ManuOur>
          },
          {
             path:'/login',
             element:<Login></Login>
          },
          {
             path:'/order/:category',
             element:<Order></Order>
          },
          {
             path:'/ragister',
             element:<Ragister></Ragister>
          }
        ]
     },
   ]);

   export default Router;