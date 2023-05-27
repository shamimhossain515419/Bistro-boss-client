import chefeiamge from  '../../../src/assets/home/chef-service.jpg'

const SefeRecipe = () => {
     return (
          <div className=' relative mt-11'>
           <div className=' relative w-full h-[70vh] rounded-md'>
               <img src={chefeiamge} alt="" />  

                <div className=' text-center absolute top-40  mx-16 bg-white px-4 py-10 rounded-lx'>
                <h1 className=' text-4xl font-bold'> Bistro Boss</h1>     
                 <p className=' text-xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo. </p>
               </div>    
          </div> 
          </div>
     );
};

export default SefeRecipe;