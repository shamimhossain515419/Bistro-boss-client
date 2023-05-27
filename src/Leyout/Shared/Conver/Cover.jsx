

const Cover = ({img, title, details }) => {
     return (
          <div>
            <div style={{backgroundImage:`url("${img}")`}} className="hero  h-[700px]"  >
                    <div className=" bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                         <div className="  max-w-2xl bg-[#00000071] p-4  px-8  ">
                          <h1 className="mb-5 text-6xl  uppercase font-bold">{title}</h1>
                          <p className="mb-5 text-3xl uppercase my-2">{details}</p>

                         </div>
                    </div>
               </div>

            
          </div>
     );
};

export default Cover;