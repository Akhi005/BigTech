import { Link } from "react-router-dom";

const BrandCard = ({ tech}) => {
    const { name,image } = tech;

    return (
        <div className="card w-96 bg-base-100 shadow-2xl mt-5 rounded">
            <figure><img src={image} className="h-[200px]" /></figure>
            <div className="text-xl italic my-1 font-serif">{name}</div>
            <div className="card-actions text-white">
                <Link to={`/product/${name}`}><button className="bg-yellow-600 p-3 font-bold m-5">Products</button></Link>
            </div>
        </div>
    );
};
export default BrandCard;