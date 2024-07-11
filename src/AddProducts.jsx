import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const AddProducts = () => {
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
                text: 'New Technology added successfully',
                icon: 'success',
                confirmButtonText: 'Close'
              })
              Navigate('/');
          }
        })
    }
    return (
        <div className='px-10 mx-11 my-8 bg-yellow-600 h-full'>
            <h2 className="text-4xl text-center text-white py-5 ">Add Products</h2>
            <form onSubmit={handleAdd}>
              <div className="flex text-xl  mt-5 p-14 gap-10">
              <div className="w-1/2">
                <div className="form-control my-1">
                    <label className="label"><span className="label-text text-white">Model Name</span></label>
                    <label className="input-group">
                        <input type="text" name="name" className="input input-bordered w-full p-1 rounded" />
                    </label>
                </div>
                <div className="form-control my-1">
                    <label className="label">
                        <span className="label-text text-white">Brand</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="brand"  className="input input-bordered w-full p-1 rounded" />
                    </label>
                </div>
                <div className="form-control my-1">
                    <label className="label">
                        <span className="label-text text-white">Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="type"  className="input input-bordered w-full p-1 rounded" />
                    </label>
                </div>
                </div>
               <div className="w-1/2">
               <div className="form-control my-1">
                    <label className="label">
                        <span className="label-text text-white">Product Image URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="product_pic"  className="input input-bordered w-full p-1 rounded" />
                    </label>
                </div>
               <div className="form-control my-1">
                    <label className="label">
                        <span className="label-text text-white">Short Description</span>
                    </label>
                    <label className="input-group">
                     <input type="text" name="details" id="" className="input input-bordered w-full p-1 rounded" />
                    </label>
                </div>
               <div className="form-control my-1">
                    <label className="label">
                        <span className="label-text text-white">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price"  className="input input-bordered w-full p-1 rounded" />
                    </label>
                </div>
               </div>
              </div>
              <div className='flex justify-center '>
              <input className="btntext-center border-none px-10 cursor-pointer rounded mt-5 mb-12 py-3 text-white font-semibold bg-yellow-500"
               type="submit" value="Add" />
              </div>
            </form>
        </div>
    );
};

export default AddProducts;