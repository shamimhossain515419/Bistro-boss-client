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
import RouteAddmin from "./RouteAddmin";
import AddItem from "../Pages/Dashboard/AddItem/Additem";
import MannageItem from "../Pages/Dashboard/MannageItem/MannageItem";
import Updateitem from "../Pages/Dashboard/UpdateItem/Updateitem";
import Payment from "../Pages/Dashboard/Payment/Payment";

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
            path:'payment',
            element:<Payment></Payment>
         },

         // admin route
         {
            path:'AllUsers',
            element: <RouteAddmin> <Allusers></Allusers></RouteAddmin> 
         },
         {
            path:'additem',
            element: <RouteAddmin><AddItem></AddItem> </RouteAddmin> 
         },
         {
            path:'manngeitem',
            element: <RouteAddmin><MannageItem></MannageItem> </RouteAddmin> 
         },
         {
            path:'menu/:id',
            element: <RouteAddmin><Updateitem></Updateitem> </RouteAddmin>,
            loader:({params})=>fetch(`https://bistro-boss-server-ten.vercel.app/menu/${params.id}`) 
         }
      ]
     }
   ]);

   export default Router;