import React, { useState } from "react";

const DigitalCV = () => {
  const [isPolaroidOnTop, setIsPolaroidOnTop] = useState(false);
  const [pressedButton, setPressedButton] = useState(null); // Track which button is pressed

  const audio = new Audio('./sounds/mouse-click.mp3'); // Replace with your sound file path
  const retroClick = new Audio("./sounds/retro-click.mp3");

  const togglePolaroidPosition = () => {
    setIsPolaroidOnTop((prev) => !prev);
    audio.currentTime = 0; // Reset sound to start
    audio.play(); // Play click sound
    console.log("isPolaroidOnTop:", !isPolaroidOnTop);
  };

  const handleButtonClick = (button) => {
    retroClick.currentTime = 0;
    retroClick.play();

    setPressedButton(button); // Set button as pressed
    setTimeout(() => {
      setPressedButton(null); // Reset after 150ms
    }, 150);
  };

  return (
    <div className="min-h-screen bg-white bg-[linear-gradient(to_right,transparent_24px,rgba(212,70,110,0.30)_25px,transparent_26px),linear-gradient(to_bottom,transparent_24px,rgba(212,70,110,0.30)_25px,transparent_26px)] bg-[size:25px_25px] flex flex-col items-center p-5">
      <div className="w-full relative">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-7xl font-bold text-[#D4466E] text-left">Amparo Oliver Buzali</h1>
          <div className="relative w-1/3">
            <img 
              src="./images/ipad.png" 
              alt="iPad and Pencil" 
              className="absolute w-full max-w-md transform -rotate-45 scale-140"
              style={{ top: '-200px', left: '30%' }} // Adjust top and left for positioning
            />
            <p className="text-5xl text-gray-700 rotate-45 relative z-20" style={{ fontFamily: 'myOwnCalig', top: '285px', left: '25px' }}>wanna learn more <span className="underline cursor-pointer text-[#D4466E]">ABOUT ME?</span></p>
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
              src="./images/polaroid1.png"
              alt="Polaroid"
              className={`absolute transition-transform duration-300 cursor-pointer ${isPolaroidOnTop ? 'z-20 scale-110' : 'z-10 scale-100'} w-[450px]`} // (adjust as needed)
              style={{
                transform: isPolaroidOnTop ? 'translateY(-80px)' : 'translateY(-60px)',
                left: '4%',
              }}
              onClick={togglePolaroidPosition}
            />
            {/* Notebook Image */}
            <img
              src="./images/pinknotebook.png"
              alt="Notebook"
              className="relative z-10"
              style={{ left: '-100px', height: '500px', top: '-10px' }} // Adjust values as needed
            />
            {/* Text beside Polaroid */}
            <div className="ml-15 self-start  mt-4 font-inter font-semibold text-lg text-[#83797C] text-1xl ">
              <p className="text-[#5A5355]">Hi, I’m Amparo!</p>
              <p>A <span className="text-[#5A5355]">Computer Engineer</span> who loves blending tech with creativity.</p>
              <p>I’m passionate about making life more fun and positive through AI innovations. </p>
              <p>Whether it’s creating smarter solutions or exploring new ideas, I believe in the power</p>
              <p>of technology to brighten everyday moments.</p>
            </div>
          </div>
        </div>
        <div className="relative w-full">
        <p className="text-5xl text-gray-700 relative" style={{ fontFamily: 'myOwnCalig', top: '-340px', left: '780px' }}>Past <span className="underline cursor-pointer text-[#D4466E]">PROJECTS</span></p>
        <img 
              src="./images/forward.png" 
              alt="Forward button" 
              className={`absolute transition-transform duration-150 cursor-pointer ${pressedButton === 'forward1' ? 'scale-90' : 'scale-100'}`}
              style={{ top: '-280px', left: '45%' }} // Adjust top and left for positioning
              onClick={() => handleButtonClick('forward1')}
        />
        <img 
              src="./images/back.png" 
              alt="Forward button" 
              className={`absolute transition-transform duration-150 cursor-pointer ${pressedButton === 'back1' ? 'scale-90' : 'scale-100'}`}
              style={{ top: '-200px', left: '45%' }} // Adjust top and left for positioning
              onClick={() => handleButtonClick('back1')}
        />
        <img 
              src="./images/VintagePC.png" 
              alt="Vintage PC " 
              className="absolute w-full max-w-md transform scale-100"
              style={{ top: '-300px', left: '50%' }} // Adjust top and left for positioning
        />
        <img 
              src="./images/forward.png" 
              alt="Forward button" 
              className={`absolute transition-transform duration-150 cursor-pointer ${pressedButton === 'forward2' ? 'scale-90' : 'scale-100'}`}
              style={{ top: '-280px', left: '80%' }} // Adjust top and left for positioning
              onClick={() => handleButtonClick('forward2')}
        />
        <img 
              src="./images/back.png" 
              alt="Forward button" 
              className={`absolute transition-transform duration-150 cursor-pointer ${pressedButton === 'back2' ? 'scale-90' : 'scale-100'}`}
              style={{ top: '-200px', left: '80%' }} // Adjust top and left for positioning
              onClick={() => handleButtonClick('back2')}
        />
        </div>
      </div>
    </div>
  );
};

export default DigitalCV;
