import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCard from "../Hooks/UseDatauser/useCard";


const Cardmenu = ({ item }) => {
     const { name, image, price, recipe, _id } = item;
     const {user} = useContext(AuthContext);
    const [,refetch]=useCard();
     const navigate = useNavigate();
     const location = useLocation();

     const handleAddToCart = item => {
          
          if(user && user.email){
              const cartItem = {menuItemId: _id, name, image, price, email: user.email}
              fetch('https://bistro-boss-server-ten.vercel.app/carts', {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(cartItem)
              })
              .then(res => res.json())
              .then(data => {
                  if(data.insertedId){
                    refetch();
                      Swal.fire({
                          position: 'top-end',
                          icon: 'success',
                          title: 'Food added on the cart.',
                          showConfirmButton: false,
                          timer: 1500
                        })
                  }
              })
          }
          else{
              Swal.fire({
                  title: 'Please login to order the food',
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Login now!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                  }
                })
          }
      }


     return (
          <div>
            

               <div className="card card-compact w-96 bg-base-100 shadow-xl">
                         <figure><img src={image} alt="Shoes" /></figure>
                         <div className="card-body text-center" >
                              <h2 className=" text-2xl font-semibold my-1 text-center">{name}</h2>
                              <p>{recipe}</p>
                            
                              <button onClick={() => handleAddToCart(item)} className="btn btn-outline  btn-primary border-0 border-b-4 ">Buy Now</button>
                             
                         </div>
                    </div> 
                   
               </div>
          
     );
};

export default Cardmenu;