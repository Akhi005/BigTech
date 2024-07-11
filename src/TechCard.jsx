import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const TechCard = ({ tech, technologies, setTechnologies }) => {
  const { _id,name,brand,type,product_pic,Price,Details} = tech;
  // console.log(tech);
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

        fetch(`http://localhost:5000/tech/${_id}`, {
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
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded">
      <figure><img src={product_pic} className="h-[200px] p-10 absolute" />
        <div className="btn-group btn-group-horizontal relative mt-52 gap-5 p-5">
          <button onClick={() => handleDelete(_id)}><img className="w-[30px] h-[30px]" src="https://i.ibb.co/PzNyQJN/trash.png" /></button>
          <button ><img className="w-[30px] h-[30px]" src="https://i.ibb.co/Sy78hYf/details.png
"/></button>
          <Link to={`/updatetechnology/${_id}`}>
            <button ><img className="w-[30px] h-[30px]" src="https://i.ibb.co/Nr65xB2/update.png" /></button></Link>
        </div>
      </figure>
      <div className="card-body bg-[#F5F4F1]">
        <div className="badge badge-error text-white">{name}</div>
        <p>{brand}</p>
        <p>{type}</p>
        <p>{Price}</p>
        <p>{Details}</p>
        <div className="card-actions justify-center text-white">
          <Link to={`/DetailsCard/${_id}`}><button className="border-3 px-4 py-2 bg-red-400">Details</button></Link>
        </div>
      </div>

    </div>
  );
};
export default TechCard;