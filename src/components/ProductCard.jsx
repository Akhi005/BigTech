import Swal from "sweetalert2";
const ProductCard = ({ tech }) => {
    const {brand,details,name, price,product_pic,rating, type}=tech;
    const handleAddMycart=()=>{
        console.log(tech);
        
        fetch('https://big-tech-nzgr1vit0-akhis-projects.vercel.app/mycart',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(tech)
        })
        .then(res=>res.json())
        .then(data=>{ console.log(data);
        if(data.modifiedCount){
            Swal.fire({
                title: 'Success!',
                text: 'New Technology updated successfully',
                icon: 'success',
                confirmButtonText: 'close'
              })
          }
        })
    }
    return (
      tech.length?  
        <h2>404</h2> : 
        <>
           <div className="card w-96 bg-gray-300 shadow-2xl mt-5 rounded p-5 ">
            <figure><img src={product_pic} className="h-[200px] w-[700px]" /></figure>
           <div className="flex flex-grow text-left flex-col">
           <div className="">Brand : {brand}</div>
            <div className="">Type : {type}</div>
            <div className="">{details}</div>
            <div className="text-xl text-red-500">${price}</div>
            <div className="">Rating : {rating}</div>
           </div>
            <button onClick={handleAddMycart} className="bg-red-500 mt-3 text-white p-2">Add to cart</button>
           
            </div>
        </>
    )
}
export default ProductCard;