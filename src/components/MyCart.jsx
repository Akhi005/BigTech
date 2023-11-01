import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyCart = () => {
  const loadedtechnology = useLoaderData();
  console.log(loadedtechnology)
  const [technologies,setTechnologies] =useState(loadedtechnology);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://big-tech-36v9saaxg-akhis-projects.vercel.ap/mycart/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'This Technology has been deleted.',
                'success'
              )
              const remaining = technologies.filter(tec => tec._id !== _id);
              setTechnologies(remaining);
              //   console.log(technologies);
            }
          })
      }
    })
  }
  //  const [cart,setCart]=useState([]);
  // const handleAddToCart=tech=>{
  //   const newcart=[...cart,tech];
  //   console.log(newcart);
  //   setCart(newcart);
  //   fetch(`https://big-tech-36v9saaxg-akhis-projects.vercel.ap/mycart/${newcart}`,{
  //       method:'POST',
  //       headers:{
  //           'content-type':'application/json'
  //       },
  //       body:JSON.stringify(newcart)
  //   })
  //   .then(res=>res.json())
  //   .then(data=>setCart(data))
  // }
  // console.log(cart)
  return (
    <div>
      <h1 className='text-4xl text-center mb-10 mt-10'>MyCart : {loadedtechnology.name}</h1>
      {/* <img src={loadedtechnology.product_pic} alt="" /> */}
      {
        // <div className='grid md:grid-cols-3 mt-5 mb-10'>  {
        //   loadedtechnology.map(tech => <TechCard key={tech._id}
        //     tech={tech} technologies={technologies} 
        //     setTechnologies={setTechnologies} 
        //     handleAddToCart={handleAddToCart}
        //     ></TechCard>) 
        // }
        // </div>
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Details</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        technologies.map(cart=>
          <tr key={cart._id}>
        <th>{cart.name}</th>
        <td>{cart.brand}</td>
        <td>{cart.price}</td>
        <td><Link to={`/DetailsCard/${cart._id}`}>Details</Link> </td>
        <td > <Link to={`/updatetechnology/${cart._id}`}>Update</Link> </td>
        <td onClick={()=>handleDelete(cart._id)}>X</td>
      </tr>)
      }
    </tbody>
  </table>
</div>
         
         
         }
    </div>
  );
};

export default MyCart;
