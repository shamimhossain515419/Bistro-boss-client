
const SectionTitle = ({subTitle,HeaderTitle}) => {
     return (
          <div className=" text-center md:w-5/12 mx-auto my-6">
            <p className=" text-xl font-normal mb-2 text-[#edcd82]">---- { subTitle} ----</p>
             <h1 className=" text-4xl py-2 font-semibold uppercase my-1 border-y-2 "> {HeaderTitle} </h1>    
          </div>
     );
};

export default SectionTitle;