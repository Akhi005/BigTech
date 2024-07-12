import { useLoaderData } from "react-router-dom";

const DetailsCard = () => {
  const data = useLoaderData();
  const { name, brand, product_pic, type, price, details,_id } = data;
   console.log(_id,name);
  return (
    <div>
      <div className="flex justify-center items-center mt-24 gap-10 bg-green-200 p-16">
        <img className="w-[500px] h-[400px]" src={product_pic} alt={name} />
        <div className="flex flex-grow text-left flex-col">
          <div className="flex items-center gap-4 my-2">
            <h1 className="text-lg font-bold">Brand</h1> : {brand}
          </div>
          <hr className="border-black border-2" />
          <div className="flex items-center gap-4 my-2">
            <h1 className="text-lg font-bold">Model</h1> : {name}
          </div>
          <hr className="border-black border-2" />
          <div className="flex items-center gap-4 my-2">
            <h1 className="text-lg font-bold">Type</h1> : {type}
          </div>
          <hr className="border-black border-2" />
          <div className="flex items-center gap-4 my-2">
            <h1 className="text-lg font-bold">About</h1> : {details}
          </div>
          <hr className="border-black border-2" />
          <div className="text-3xl my-5 text-red-500">Price : ${price}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
