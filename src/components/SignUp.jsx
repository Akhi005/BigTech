import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [LoginError, setLoginError] = useState(false);
    const [success, setsuccess] = useState(false);
    const Navigate=useNavigate();
    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setLoginError('');
        setsuccess('');
        if (password.length < 6) {
            setLoginError('Password is less than 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setLoginError('Password should have at least one uppercase letter')
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setsuccess('Successfully Registered ')
                Navigate('/');
                const createAt = result.user?.metadata?.creationTime;

                const user = { email, createAt: createAt };
                fetch('https://big-tech-36v9saaxg-akhis-projects.vercel.ap/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
            })
            .catch(err => {
                console.error(err)
                setLoginError(err.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body" >
                        <h2 className="text-2xl ">Sign Up</h2>
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
                        {
                            LoginError && <p className="text-red-500 text-xl mb-2">{LoginError}</p>
                        }
                        {
                            success && {success}
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                        <p>Already Registered ? Do <Link to='/signin'><p className="btn">Sign in</p></Link></p>
                <button></button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default SignUp;