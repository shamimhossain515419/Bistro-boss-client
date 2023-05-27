

const Cardmenu = ({item}) => {
     const {name,image, recipe,price}=item
     return (
          <div>
               <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">{name}</h2>
                         <p>If a dog chews shoes whose shoes does he choose?</p>
                         <div className="card-actions justify-end">
                              <button className="btn btn-primary">Buy Now</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Cardmenu;