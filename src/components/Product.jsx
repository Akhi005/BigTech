import { useLoaderData } from "react-router-dom";

const Product = () => {
    const tech=useLoaderData();
    const {brand} = tech;
    return (
        <div>
           <h2>Brand : {brand}</h2>
        </div>

        
    );
};

export default Product;