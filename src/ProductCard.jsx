import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const ProductCard = ({ tech }) => {
    const {product_pic,_id}=tech;
    const handleAddMycart=()=>{
        console.log(tech);
        fetch('http://localhost:5000/mycart',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(tech)
        })
        .then(res=>res.json())
        .then(data=>{ console.log(data);
        
            Swal.fire({
                title: 'Success!',
                text: 'New Technology updated successfully',
                icon: 'success',
                confirmButtonText: 'close'
              })
          
        })
    }
   
    return (
        
           <div className="card w-96 bg-gray-300 shadow-2xl m-5 rounded p-5 ">
            <figure><img src={product_pic} className="h-[200px] w-[700px]" /></figure>
           
           <div className="flex gap-5 text-center mx-12"> 
            <button onClick={handleAddMycart} className="bg-red-500 mt-3 text-white p-2 rounded-lg">Add to cart</button>
            <Link to={`/DetailsCard/${_id}`}>
          <button className="bg-red-500 mt-3 text-white p-2 rounded-lg">See Details</button>
             </Link>
            </div>
      </div>
    )
}
export default ProductCard;