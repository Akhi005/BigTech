import { useContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import app from "../Firebase/firebase.config";

const SignIn = () => {
     const [user,setUser]=useState(null);
    const { signInUser } = useContext(AuthContext);
    const [LoginError, setLoginError] = useState(false);
    const [success, setsuccess] = useState(false);
    const Provider=new GoogleAuthProvider();
    const Navigate=useNavigate();
    const auth = getAuth(app);
    const GoogleSignIn=()=>{
    
        signInWithPopup(auth,Provider)
        .then(res=>{
            setsuccess(res.user);
            const loggedInUser=res.user;
            setUser(loggedInUser);
            Navigate("/");
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setLoginError('');
        setsuccess('');

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                setsuccess(result.user);
                e.target.reset();
                Navigate('/');
               const user={ 
                email,
                lastLoggedAt: result.user?.metadata?.lastSignInTime }
              fetch('http://localhost:5000/user',{
                method:'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
              })
              .then(res=>res.json())
              .then(data=>console.log(data));
            })
            .catch(err => {
                console.error(err)

                setLoginError(err.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">

            <div className="hero-content flex-col lg:flex-row-reverse w-[450px]">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignin} className="card-body" >
                        <h2 className="text-2xl ">Sign In</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                       <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                    {
                    LoginError && <p className="text-red-500 text-xl mb-2">Email or Password is not correct</p>
                }
                 {
                    success && Swal.fire('Successfully Logged in!!!')
                 }
                <p className="flex items-center justify-left  gap-5 m-5 ">New to this Website?  <Link to='/signup'><p className="btn"> Register</p></Link></p>
                <button className="mb-10" onClick={GoogleSignIn}>Sign in with  <span className="text-blue-500 font-bold">Google</span></button>
           
                </div>
            </div>
        </div>
    );
};
export default SignIn;