import { useLoaderData } from "react-router-dom";

const DetailsCard = () => {
    const tech=useLoaderData();
    const {name,brand,product_pic,type,price,details} = tech;
    console.log(name);
    return (
        <div>
           <div className="flex justify-center items-center mt-24 gap-10 bg-green-200 p-16">
            <img className="" src={product_pic}  />
            <div className="flex flex-grow text-left flex-col">
           <div className="flex items-center gap-3" ><h1 className="text-lg font-bold">Brand</h1> : {brand}</div>
            <div className="flex items-center gap-3" ><h1 className="text-lg font-bold">Model</h1> : {name}</div>
            <div className="flex items-center gap-3" ><h1 className="text-lg font-bold">Type</h1> : {type}</div>
            <div className="flex items-center gap-3" ><h1 className="text-lg font-bold">About</h1> : {details}</div>
            <div className="text-3xl my-5 text-red-500">Price : ${price}</div>
           </div>
        </div>
        </div>
    );
};

export default DetailsCard;