

const Manu = ({item}) => {
     const {image,name,price,recipe}=item;

     return (
          <div className=' flex  gap-5'>
                <img style={{width:"110px" , height:"110px" ,  borderRadius:"0 100px 100px 100px" }} src={image} alt="" />
                <div>
                    <h1 className='  uppercase text-2xl font-semibold '>{name}-------------- </h1>
                    <p> {recipe} </p>
                </div>
             <p className=' text-xl text-yellow-500 font-medium'> {price} </p>
          </div>
     );
};

export default Manu;