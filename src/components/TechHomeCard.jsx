import { Link } from "react-router-dom";

const TechHomeCard = ({ tech}) => {
    const { Brand, Brand_Image } = tech;

    return (
        <div className="card w-96 bg-base-100 shadow-2xl mt-5 rounded">
            <figure><img src={Brand_Image} className="h-[200px] p-10" /></figure>
            <div className="">{Brand}</div>
            <div className="card-actions text-white">
                <Link to={`/product/${Brand}`}><button className="bg-green-800 p-3 font-bold m-5">Products</button></Link>
            </div>
        </div>
    );
};
export default TechHomeCard;