import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const AddTechnology = () => {
    const Navigate=useNavigate();
    const handleAdd=event=>{
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
        const newtechnology={name,brand,type,product_pic,price,brand_pic,rating,details};
        console.log(newtechnology);
        fetch('http://localhost:5000/tech',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newtechnology)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);
          if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'New Technology added successfully',
                icon: 'success',
                confirmButtonText: 'Close'
              })
              Navigate('/');
          }
        })
    }
    return (
        <div className='px-10'>
            <h2 className="text-2xl text-center mt-5">Add Technology</h2>
            <form onSubmit={handleAdd}>
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
                       
                        <input type="text" name="rating" placeholder="Brand image" className="input input-bordered w-full" />
                    </label>
                </div>
            
               </div>
              </div>
              <input className="btn btn-primary ml-96 mt-10 border-none w-1/3 text-white font-semibold bg-gray-400
               hover:bg-gray-400"
               type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddTechnology;