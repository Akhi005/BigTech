import { useState } from "react";
import { useLoaderData } from "react-router-dom"
const Users = () => {
    let c=0;
    const loadedUser = useLoaderData();
    const [users,setUsers] = useState(loadedUser);
    const handleDelete = id => {
       fetch(`http://localhost:5000/user/${id}`,{
         method:'DELETE'
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.deletedCount>0){
          console.log("Deleted Successfully");
        const remain = users.filter(user=> user._id!==id);
        setUsers(remain);
        }
       })
    }
    return (
        <div>
            
            <h2>{loadedUser.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                          users.map(user=><tr key={user._id}>
                            <th>{c+=1}</th>
                            <td>{user.email}</td>
                            <td>{user.createAt}</td>
                            <td>{user.lastLoggedAt}</td>
                            <td><button onClick={()=> handleDelete(user._id)}>Delete</button></td>
                          </tr> )
                            
                             
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;