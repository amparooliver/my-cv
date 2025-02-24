import React, { useState } from "react";

const DigitalCV = () => {
  const [isPolaroidOnTop, setIsPolaroidOnTop] = useState(false);
  const audio = new Audio('/sounds/mouse-click.mp3'); // Replace with your sound file path

  const togglePolaroidPosition = () => {
    setIsPolaroidOnTop((prev) => !prev);
    audio.currentTime = 0; // Reset sound to start
    audio.play(); // Play click sound
    console.log("isPolaroidOnTop:", !isPolaroidOnTop);
  };

  return (
    <div className="min-h-screen bg-white bg-[linear-gradient(to_right,transparent_24px,rgba(212,70,110,0.30)_25px,transparent_26px),linear-gradient(to_bottom,transparent_24px,rgba(212,70,110,0.30)_25px,transparent_26px)] bg-[size:25px_25px] flex flex-col items-center p-5">
      <div className="w-full relative">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-7xl font-bold text-[#D4466E] text-left">Amparo Oliver Buzali</h1>
          <div className="relative w-1/3">
            <img 
              src="/images/ipad.png" 
              alt="iPad and Pencil" 
              className="absolute w-full max-w-md transform -rotate-45 scale-180"
              style={{ top: '-50px', left: '25%' }} // Adjust top and left for positioning
            />
            <p className="text-5xl text-gray-700 rotate-45 relative" style={{ fontFamily: 'myOwnCalig', top: '250px', left: '35px' }}>wanna learn more <span className="underline cursor-pointer text-[#D4466E]">ABOUT ME?</span></p>
          </div>
        </div>
        <div className="flex justify-between items-end w-full">
          <h2 className="text-6xl text-gray-700" style={{ fontFamily: 'myOwnCalig' }}>Computer Engineer Undergraduate</h2>
          <div className="w-1/3">{/* Blank space for future content */}</div>
        </div>
        <div className="mt-7 grid grid-cols-1 md:grid-cols-1 gap-6">
          <div className="flex items-center relative">
            {/* Polaroid Image */}
            <img
              src="/images/polaroid1.png"
              alt="Polaroid"
              className={`absolute transition-transform duration-300 cursor-pointer ${isPolaroidOnTop ? 'z-20 scale-110' : 'z-10 scale-100'} w-[450px]`} // (adjust as needed)
              style={{
                transform: isPolaroidOnTop ? 'translateY(-50px)' : 'translateY(20px)',
                left: '10%',
              }}
              onClick={togglePolaroidPosition}
            />
            {/* Notebook Image */}
            <img
              src="/images/pinknotebook.png"
              alt="Notebook"
              className="relative z-10"
              style={{ left: '-100px', height: '500px' }} // Adjust values as needed
            />
            {/* Text beside Polaroid */}
            <div className="ml-20 self-start  mt-4 font-inter font-semibold text-lg text-[#83797C] text-1xl ">
              <p className="text-[#5A5355]">Hi, I’m Amparo!</p>
              <p>A <span className="text-[#5A5355]">Computer Engineer</span> who loves blending tech with creativity.</p>
              <p>I’m passionate about making life more fun and positive through AI innovations. </p>
              <p>Whether it’s creating smarter solutions or exploring new ideas, I believe in the power</p>
              <p>of technology to brighten everyday moments.</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <img src="/images/VintagePC.png" alt="Vintage Computer" className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default DigitalCV;
