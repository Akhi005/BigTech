import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const { brand } = useParams();
  const [products, setProducts] = useState([]);
//   const [JSProduct, setJSProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/tech/brand/${brand}`,
    {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(brand)
    })
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [brand]);
  
   return (
        <>
        <div className="carousel w-full mt-10 h-[350px] ">
        <div id="item1" className="carousel-item w-full">
            <img src="https://i.ibb.co/Fwbb0PW/advertise-1.jpg" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
            <img src="https://i.ibb.co/Yc7HHQY/advertise-2.jpg" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
            <img src="https://i.ibb.co/hCSRdXw/advertise-3.jpg" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
            <img src="https://i.ibb.co/hCSRdXw/advertise-3.jpg" className="w-full" />
        </div>
    </div>
     <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
    </div>
    <h2>Brand : {brand}</h2>
    <div className='grid md:grid-cols-3 mt-5 mb-10'> 
        </div>
     </>
    );
};

export default Product;