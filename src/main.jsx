import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/App.css'; 
import '/src/index.css';  
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Home.jsx'
import AddProducts from './AddProducts.jsx'
import UpdateTechnology from './UpdateTechnology.jsx'
import MyCart from './MyCart.jsx'
import DetailsCard from './DetailsCard.jsx'
import Product from './Product.jsx'
import Product_List from './ProductModify';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    loader:()=>fetch('data.json')
 }
  ,{
    path: "/addtechnology",
    element: <AddProducts/>,
    
  },{
    path: "/updatetechnology/:id",
    element: <UpdateTechnology/>,
    loader:({params})=>fetch(`http://localhost:5000/tech/${params.id}`)
  },{
    path:"/mycart",
    element:<MyCart></MyCart>,
    loader:()=>fetch('http://localhost:5000/mycart')
  },{
    path:'/productlist',
    element:<Product_List/>
  },
  {
    path:"/DetailsCard/:id",
    element:<DetailsCard/>,
    loader:({params})=>fetch(`http://localhost:5000/tech/${params.id}`)
  },{
    path:"/product/:brand",
    element:<Product/>,
    loader:({params})=>fetch(`http://localhost:5000/tech/brand/${params.brand}`)
  }
   
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
