import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const AddProducts = () => {
    const Navigate=useNavigate();
    const handleAdd=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const brand=form.brand.value.toLowerCase();
        const type=form.type.value;
        const product_pic=form.product_pic.value;
        const details=form.details.value;
        const price=form.price.value;
       
        const newtechnology={name,brand,type,product_pic,price,details};
        console.log(newtechnology);
        fetch('http://localhost:5000/tech',{
            method:'POST',
            headers:{  'content-type':'application/json' },
            body:JSON.stringify(newtechnology)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);
          if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'New Product added successfully',
                icon: 'success',
                confirmButtonText: 'Close'
              })
              Navigate('/productlist');
          }
        })
    }
    return (
        <div className=' bg-yellow-600 my-2 mx-8'>
            <h2 className="text-4xl text-center pt-5 text-white">Add Products</h2>
            <form onSubmit={handleAdd}>
              <div className="flex text-xl p-14 gap-10">
              <div className="w-1/2">
                <div className="form-control">
                    <label className="label"><span className="label-text ">Model Name</span></label>
                    <label className="input-group">
                        <input type="text" name="name" className="input input-bordered w-full rounded" />
                    </label>
                </div>
                <div className="form-control my-3">
                    <label className="label">
                        <span className="label-text ">Brand</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="brand"  className="input input-bordered w-full rounded" />
                    </label>
                </div>
                <div className="form-control my-2">
                    <label className="label">
                        <span className="label-text ">Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="type"  className="input input-bordered w-full rounded" />
                    </label>
                </div>
                </div>
               <div className="w-1/2">
               <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Product Image URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="product_pic"  className="input input-bordered w-full rounded" />
                    </label>
                </div>
               <div className="form-control my-3">
                    <label className="label">
                        <span className="label-text ">Description</span>
                    </label>
                    <label className="input-group">
                     <input type="text" name="details" className="input input-bordered w-full rounded" />
                    </label>
                </div>
               <div className="form-control my-2">
                    <label className="label">
                        <span className="label-text ">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price"  className="input input-bordered w-full rounded" />
                    </label>
                </div>
               </div>
              </div>
              <div className='flex justify-center'>
              <input className="btntext-center border-none px-10 cursor-pointer rounded mb-3 py-3  font-semibold bg-yellow-500"
               type="submit" value="Add" />
              </div>
            </form>
        </div>
    );
};

export default AddProducts;