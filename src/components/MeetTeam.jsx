const MeetTeam = () => {
    return (
        <div>
           
           <div className="flex justify-center items-center gap-5 mb-2"> <img className="w-[30px]" src="https://i.ibb.co/t4DJb6W/star.jpg"/> 
           <h1 className="text-3xl text-center mb-2 font-semibold">
                Meet Our Team </h1><img className="w-[30px]" src="https://i.ibb.co/t4DJb6W/star.jpg"/></div>
           
            <img src="https://i.ibb.co/ykXp1Q3/Meet-Team-Bg.jpg" className="w-full h-[400px] mb-5 absolute" />
            <div className="relative flex flex-col text-center gap-10 mt-16 justify-center">
                <div className="flex justify-center gap-10">
                    <img className="rounded-full" src="https://i.ibb.co/Fs4sDh4/Person-1.jpg" alt="" />
                    <img className="rounded-full" src="https://i.ibb.co/pJdxnSh/Person-2.jpg" alt="" />
                    <img className="rounded-full" src="https://i.ibb.co/C99JqQB/Person-3.jpg" alt="" />
                </div>
                <p className="text-white p-10 text-2xl mt-5">We care our clients.We try to show the best performance to our clients
                 and this make us happy.We care our clients.</p>
            </div>
        </div>
    );
};

export default MeetTeam;