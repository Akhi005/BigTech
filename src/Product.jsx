import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const Product = () => {
  
  const [product, setProduct] = useState([]);
  const {brand} = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/tech/brand/${brand}`)
      .then(response => response.json())
      .then(data => setProduct(data))
    }, [brand]);
    console.log(product);
   return (
        <>
    <h2 className="font-bold text-center my-3 text-3xl">{brand}</h2><hr />
    <div className="grid md:grid-cols-3 mt-5 mb-10">
        {product.map(tech => <ProductCard key={tech._id}
            tech={tech}  ></ProductCard>)}
      </div>
     </>
    );
};

export default Product;