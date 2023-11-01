import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import TechHome from "./TechHome";
import MeetTeam from "./MeetTeam";
import About from "./About";
import { useEffect, useState } from "react";
import '../App.css'
const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);
  const loadedtechnology = useLoaderData();
  return (
    <div>

      <Navbar></Navbar>
      <div className="flex justify-center items-center gap-10 p-10 bg-base-100">
        <div> <img src="https://i.ibb.co/5cnWx46/banner.png" className="h-[420px]" /></div>
        <div>
          <h2 className="text-2xl font-bold mb-7">Find your Brand</h2>
          <p className="text-justify">Big Tech is widely defined as the most prosperous <br /> and influential
            technological companies in in the IT industry.</p>
          <button onClick={toggleDarkMode}
            className="mt-5 bg-red-500 text-white p-3">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
      <About></About>
      <TechHome key={loadedtechnology._id} loadedtechnology={loadedtechnology} ></TechHome>
      <MeetTeam></MeetTeam>
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