import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateTechnology = () => {
    const tech=useLoaderData();
    const Navigate=useNavigate();
    const {_id,Name,Brand,Brand_Image,Product_Image,Details} = tech;
    console.log(_id,Name);
    const handleUpdate=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const brand=form.brand.value;
        const type=form.type.value;
        const product_pic=form.product_pic.value;
        const details=form.details.value;
        const price=form.price.value;
        const brand_pic=form.brand_pic.value;
        const rating=form.rating.value;
        const updated={name,brand,type,product_pic,price,brand_pic,rating,details};
        // console.log(updated);
        fetch(`https://big-tech-36v9saaxg-akhis-projects.vercel.ap/tech/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updated)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);
          if(data.modifiedCount){
            Swal.fire({
                title: 'Success!',
                text: 'New Technology updated successfully',
                icon: 'success',
                confirmButtonText: 'close'
              })
              Navigate('/')
          }
        })
    }
    return (
        <div>
            <h2 className="text-2xl text-center mt-5">Update Technology : {Name}</h2>
            <form onSubmit={handleUpdate}>
            <div className="flex text-center items-center justify-center  mt-14 bg-[#F4F3F0] p-14 gap-10">
              <div className="md:w-1/2">
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                   
                        <input type="text" name="name"placeholder="name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="brand" placeholder="Brand name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="type" placeholder="type" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="product_pic" placeholder="Picture" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
               <div className="w-1/2">
               <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <label className="input-group">
                     <input type="text" name="details" id="" className="input input-bordered w-full" />
                    </label>
                </div>
               <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                     
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Image</span>
                    </label>
                    <label className="input-group">
                       
                        <input type="text" name="brand_pic" placeholder="Brand image" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                       
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                    </label>
                </div>
            
               </div>
              </div>
              <input className="ml-96 mt-5 btn btn-primary border-none w-1/3 text-white font-semibold bg-gray-400 hover:bg-gray-400"
               type="submit" value="Update Technology" />
            </form>
        </div>
    );
};

export default UpdateTechnology;