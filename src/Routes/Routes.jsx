import { createBrowserRouter } from "react-router-dom";
import Main from "../Leyout/Main";
import Home from "../Pages/Home/Home/Home";
import ManuOur from "../Pages/Home/Manu/Manu/ManuOur";
import Order from "../Pages/Orders/Orders/Order";
import Login from "../Pages/Login/Login";
import Ragister from "../Pages/Login/Ragister";
import PrivateRoute from "./PriveteRoute/PrivateRoute";
import Dashbord from "../Leyout/Dashbord";
import Mycart from "../Pages/Dashboard/Mycart/Mycart";
import Allusers from "../Pages/Dashboard/Allusers/Allusers";

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
             element: <PrivateRoute> <Order></Order> </PrivateRoute>  
          },
          {
             path:'/ragister',
             element:<Ragister></Ragister>
          }
        ]
     },
     {
      path:'dashboard',
      element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
      children:[
         {
            path:'mycard',
            element: <Mycart></Mycart> 
         },
         {
            path:'AllUsers',
            element: <Allusers></Allusers>
         }
      ]
     }
   ]);

   export default Router;