import { useEffect, useState } from "react";


const useMenu = () => {

     const [product, setProduct] = useState([]);
 const [loading,setloading]=useState(true)
     useEffect(() => {
          fetch("http://localhost:5000/menu").then(res => res.json())
               .then(data => {
                      setProduct(data)
                     setloading(false)
                    })
     }, [])

     return [product,loading]
};

export default useMenu;