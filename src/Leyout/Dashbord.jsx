import { Link, NavLink, Outlet } from "react-router-dom";

import { FaBook, FaCalendarAlt, FaCartPlus, FaHome, FaShopify, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import useCard from "../Hooks/UseDatauser/useCard";
import useAdmin from "../Hooks/UseDatauser/useAdmin";

const Dashbord = () => {
const [admin]=useAdmin();
const [cart] = useCard();

     return (
          <div>
               <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">

                         <Outlet></Outlet>
                         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side bg-[#D1A054] ">
                         <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                         <ul className="menu p-4 w-80 bg-[#D1A054] ">

                              {
                               admin?.admin==true ? <>
                                        <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                                        <li><NavLink to="/dashboard/reservations"> <FaUtensils></FaUtensils> Add Items</NavLink></li>
                                        <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Manage Items</NavLink></li>
                                        <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                                        <li><NavLink to="/dashboard/AllUsers"><FaUsers></FaUsers> All Users</NavLink></li> </>
                                        : <>
                                             <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                                             <li className=" flex justify-between  gap-3">
                                             <NavLink to="/dashboard/mycard"><FaCartPlus></FaCartPlus> My Card <span className=" text-[#df1313] text-xl"> +{cart.length} </span>   </NavLink>
                                               </li>
                                             <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                             <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                                        </>
                              }
                              <div className="divider"></div>

                              <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                              <li><NavLink to="/menu">   Our Menu</NavLink></li>
                              <li><NavLink to="/order/salad">Order Food</NavLink></li>
                         </ul>

                    </div>
               </div>
          </div>
     );
};

export default Dashbord;