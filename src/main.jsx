import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/App.css'; 
import '/src/index.css';  
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddTechnology from './components/AddTechnology.jsx';
import UpdateTechnology from './components/UpdateTechnology.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './components/Users.jsx';
import Home from './components/Home.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import MyCart from './components/MyCart.jsx';
import DetailsCard from './components/DetailsCard.jsx';
import Product from './components/Product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader:()=>fetch('data.json')
 }
  ,{
    path: "/addtechnology",
    element: <AddTechnology></AddTechnology>,
    
  },{
    path: "/updatetechnology/:id",
    element: <UpdateTechnology></UpdateTechnology>,
    loader:({params})=>fetch(`http://localhost:5000/tech/${params.id}`)
  },{
    path:"/signin",
    element:<SignIn></SignIn>
  },{
    path:"/signup",
    element:<SignUp></SignUp>
  },{
    path:"/users",
    element:<Users></Users>,
    loader:() => fetch('http://localhost:5000/user') 
  },{
    path:"/mycart",
    element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
    loader:()=>fetch('http://localhost:5000/mycart')
  },
  {
    path:"/DetailsCard/:id",
    element:<PrivateRoute><DetailsCard></DetailsCard></PrivateRoute>,
    loader:({params})=>fetch(`http://localhost:5000/tech/${params.id}`)
  },{
    path:"/product/:brand",
    element:<Product></Product>,
    loader:({params})=>fetch(`http://localhost:5000/tech/brand/${params.brand}`)
  }
   
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
)
