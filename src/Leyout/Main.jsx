import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Shared/Footer";
import NavBer from "./Shared/NavBer";


const Main = () => {
     const location = useLocation();
     console.log(location);
     const onHeaderFooter = location.pathname.includes('login')
     return (
          <div>
               {onHeaderFooter || <NavBer></NavBer>}

               <Outlet></Outlet>
               {onHeaderFooter || <Footer></Footer>}
          </div>
     );
};

export default Main;