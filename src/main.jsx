import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import AddProducts from './AddProducts';
import MyCart from './MyCart';
import UpdateTechnology from './UpdateTechnology';
import DetailsCard from './DetailsCard';
import Product from './Product';
import Product_List from './ProductModify';

const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      loader: () => fetch('data.json')
    },{
      path:'/addtechnology',
      element:<AddProducts/>
    },{
      path: "/updatetechnology/:id",
      element: <UpdateTechnology />,
      loader: ({ params }) => fetch(`http://localhost:5000/tech/${params.id}`)
    },{
      path:'/productlist',
      element:<Product_List/>
    },
    {
      path: "/mycart",
      element: <MyCart />,
      loader: () => fetch('http://localhost:5000/mycart')
    },
    {
      path: "/DetailsCard/:id",
      element: <DetailsCard />,
      loader: ({ params }) => fetch(`http://localhost:5000/tech/${params.id}`)
    },
    {
      path: "/product/:brand",
      element: <Product/>,
      loader: ({ params }) => fetch(`http://localhost:5000/tech/brand/${params.brand}`)
    }
   
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
