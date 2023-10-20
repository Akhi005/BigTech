import { Link } from "react-router-dom";

const TechHomeCard = ({ tech }) => {
    // const tech=useLoaderData();
    const {_id,name,brand,type,product_pic,price,brand_pic,rating,details} = tech;
    const handleSearch = (brand) => {
        console.log("clicked",brand)
        fetch(`http://localhost:5000/tech/${brand}`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(brand)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data) })
    }
    return (
        <div className="card w-96 bg-base-100 shadow-2xl mt-5 rounded">
            <figure><img src={brand_pic} className="h-[200px] p-10" /></figure>
            <div className="">{name}</div>
            <div className="card-actions text-white">
            <button onClick={handleSearch} className="bg-red-400 p-3">Details</button>
             </div>
            {/* {
                tech.filter((brand_pic,index) => tech.indexOf(brand_pic) == index)
            } */}
        </div>
    );
};
export default TechHomeCard;