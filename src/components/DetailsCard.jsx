import { useLoaderData } from "react-router-dom";

const DetailsCard = () => {
    const tech=useLoaderData();
    const {_id,name,brand,type,product_pic,price,brand_pic,rating,details} = tech;
    return (
        <div>
           <div className="flex justify-center items-center mt-24 gap-10 bg-green-200 p-16">
            <img className="" src={product_pic} alt="" />
            <div className="border-2 border-violet-600 p-10">
                <h2>name : {name}</h2>
                <h3>Brand : {brand}</h3>
                <p>{details}</p>
                <button className="btn btn-primary mt-10 ml-5">Add to cart</button>
            </div>
        </div>
       
        </div>
        
    );
};

export default DetailsCard;