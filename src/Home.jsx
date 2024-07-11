import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import MeetTeam from "./MeetTeam";
import About from "./About";
import Brand from "./Brand";

const Home = () => {
  const loadedbrand = useLoaderData();
  
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
      <Brand data={loadedbrand} />
      <MeetTeam />
      <footer className="footer p-10 flex justify-around text-white bg-gray-500 text-neutral-content mt-5">
        <div className="flex flex-col">
          <header className="font-bold text-lg">Services</header>
          <a href="#">Branding</a>
          <a href="#">Design</a>
          <a href="#">Marketing</a>
          <a href="#">Advertisement</a>
        </div>
        <div className="flex flex-col">
          <header className="font-bold text-lg">Company</header>
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Jobs</a>
          <a href="#">Press kit</a>
        </div>
        <div className="flex flex-col">
          <header className="font-bold text-lg">Legal</header>
          <a href="#">Terms of use</a>
          <a href="#">Privacy policy</a>
          <a href="#">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
