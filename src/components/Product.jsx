import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const Product = () => {
  
  const [product, setProduct] = useState([]);
const {brand} = useParams();

 console.log(product)
  useEffect(() => {
    fetch(`https://big-tech-36v9saaxg-akhis-projects.vercel.ap/tech/brand/${brand}`)
      .then(response => response.json())
      .then(data => setProduct(data))
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
    <h2 className="font-bold text-center">Brand : {brand}</h2>
    <div className="grid md:grid-cols-3 mt-5 mb-10">
        {product.map(tech => <ProductCard key={tech._id}
            tech={tech}  ></ProductCard>)}
      </div>
     </>
    );
};

export default Product;