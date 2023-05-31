import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Authprovider";
import Swal from "sweetalert2";

import { FaShoppingCart } from 'react-icons/fa';
import { useState } from "react";
import useCard from "../../Hooks/UseDatauser/useCard";


const NavBer = () => {
const { user, logOut } = useContext(AuthContext);
const [cart]=useCard();
const navigete=useNavigate()
  const handleLogut = () => {
    logOut().then( () => {
      navigete('/')
      Swal.fire('sing out Successfully')
    }).catch(error => {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: `${error.massage}`,
        text: 'Something went wrong!',

      })
  })
  }
  const NavOptions = <>
    <li> <Link to={'/'}>Home</Link> </li>
    <li> <Link to={'/menu'}>Our Menu</Link> </li>
    <li> <Link to={'/order/salad'}>Order</Link> </li>
    <li>
            <Link  to={'/dashboard/mycard'}>
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary"> + { cart?cart.length : 0}</div>
                </button>
            </Link>
        </li>
    {
      user ? <> <li> <button onClick={handleLogut}>Logout</button> </li></> : <><li> <Link to={'/login'}>Login</Link> </li> </>
    }


  </>
  return (
    <div>
      <div className="navbar fixed max-w-screen-xl text-white  z-50    opacity-80  bg-[#000000b7]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {NavOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavOptions}

          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default NavBer;