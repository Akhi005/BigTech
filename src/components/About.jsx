const About = () => {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold my-5 ">About us</h2>
            <div className="grid grid-cols-2 gap-5 text-white text-xl mx-24 bg-gray-100 p-10">
                <div className="flex justify-center items-center">
                    <img className="w-[100px] h-[100px]" src="https://i.ibb.co/NrJghP1/download-5.jpg" alt="" />
                    {/* <h3></h3> */}
                    <p className="bg-green-800 rounded-r-full p-10">Ensure its easy to access</p>
                </div>
                <div className="flex justify-center items-center">
                    <img  className="w-[100px] h-[100px]" src="https://i.ibb.co/NrJghP1/download-5.jpg" alt="" />
                    {/* <h3></h3> */}
                    <p className="bg-green-800 rounded-r-full p-10">Try to make unique site.</p>
                </div>
                <div className="flex justify-center items-center">
                    <img  className="w-[100px] h-[100px]" src="https://i.ibb.co/NrJghP1/download-5.jpg" alt="" />
                    {/* <h3></h3> */}
                    <p className="bg-green-800 rounded-r-full p-10">Include right information.</p>
                </div>
                <div className="flex justify-center items-center">
                    <img   className="w-[100px] h-[100px]" src="https://i.ibb.co/NrJghP1/download-5.jpg" alt="" />
                    {/* <h3></h3> */}
                    <p className="bg-green-800 rounded-r-full p-10">Offer multiple services .</p>
                </div>
            </div>
        </div>
    );
};

export default About;