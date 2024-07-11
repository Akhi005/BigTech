import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = () => {
  const loadedTechnology = useLoaderData();
  const [technologies, setTechnologies] = useState(Array.isArray(loadedTechnology) ? loadedTechnology : []);

  useEffect(() => {
    fetch('http://localhost:5000/mycart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTechnologies(data);
        } else {
          console.error('Unexpected data format:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mycart/${_id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'This Technology has been deleted.', 'success');
              const remaining = technologies.filter((tec) => tec._id !== _id);
              setTechnologies(remaining);
            }
          })
          .catch((error) => {
            console.error('Error deleting item:', error);
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-4xl text-center mb-10 mt-10">My Cart</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="bg-base-200">
            {technologies.map((cart) => (
              <tr key={cart._id}>
                <th>{cart.name}</th>
                <td>{cart.brand}</td>
                <td>{cart.price}</td>
                <td>
                  <Link to={`/DetailsCard/${cart._id}`} className="text-blue-500 hover:text-blue-700">
                    Details
                  </Link>
                </td>
              
                <td>
                  <button onClick={() => handleDelete(cart._id)} className="text-red-500 hover:text-red-700">
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
