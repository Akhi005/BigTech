import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import TechHome from "./TechHome";
import MeetTeam from "./MeetTeam";
import About from "./About";
import '../App.css';

const Home = () => {
    
    const loadedbrand = useLoaderData();
    console.log(loadedbrand);

    return (
        <div>
            <div className="relative h-[640px]">
                <Navbar />
                <img src="https://i.ibb.co/8j2kq77/music-or-podcast-background-with-electronic-devices-headphones-coffee-and-laptop-on-office-desk-conc.jpg" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white p-10 mt-11 bg-black bg-opacity-25">
                        <h2 className="text-2xl font-bold mb-7">Find your Brand</h2>
                        <p className="text-justify">Big Tech is widely defined as the most prosperous <br /> and influential technological companies in the IT industry.</p>
                       
                    </div>
                </div>
            </div>
            <About />
            <TechHome key={loadedbrand._id} loadedbrand={loadedbrand} />
            <MeetTeam />
            <footer className="footer p-10 bg-neutral text-neutral-content mt-5">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Home;
