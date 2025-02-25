import React, { useState, useEffect } from "react";

const DigitalCV = () => {
  const [isPolaroidOnTop, setIsPolaroidOnTop] = useState(false);
  const [pressedButton, setPressedButton] = useState(null); // Track which button is pressed
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const audio = new Audio("./sounds/mouse-click.mp3");
  const retroClick = new Audio("./sounds/retro-click.mp3");

  const imagePaths = [
    "./images/LandingPageMessiBW.png",
    "./images/LandingPageAlmironBW.png",
    "./images/NoMore.png",
  ];


  const togglePolaroidPosition = () => {
    setIsPolaroidOnTop((prev) => !prev);
    audio.currentTime = 0;
    audio.play();
    console.log("isPolaroidOnTop:", !isPolaroidOnTop);
  };

  const handleButtonClick = (button) => {
    retroClick.currentTime = 0;
    retroClick.play();

    setPressedButton(button);
    setTimeout(() => {
      setPressedButton(null);
    }, 150);
  };

  const handleForward = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    handleButtonClick("forward2");
  };

  const handleBack = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
    );
    handleButtonClick("back2");
  };

  const handleForward1 = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    handleButtonClick("forward1");
  };

  const handleBack1 = () => {
        setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
    );
    handleButtonClick("back1");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleForward1();
      } else if (event.key === "ArrowLeft") {
        handleBack1();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleForward1, handleBack1]);

  return (
    <div className="min-h-screen bg-white bg-[linear-gradient(to_right,transparent_24px,rgba(212,70,110,0.30)_25px,transparent_26px),linear-gradient(to_bottom,transparent_24px,rgba(212,70,110,0.30)_25px,transparent_26px)] bg-[size:25px_25px] flex flex-col items-center p-5" style={{overflow: 'hidden', maxWidth: '1800px', margin: '0 auto'}}>
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
          <h2 className="text-6xl text-gray-700 ml-40" style={{ fontFamily: 'myOwnCalig' }}>Computer Engineer Undergraduate</h2>
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
              <p>An (almost) <span className="text-[#5A5355]">Computer Engineer</span> who loves blending tech with creativity.</p>
              <p>I’m passionate about making life more fun and positive through AI innovations. </p>
              <p>Whether it’s creating smarter solutions or exploring new ideas, I believe in the power</p>
              <p>of technology to brighten everyday moments.</p>
            </div>
          </div>
        </div>
        <div className="relative w-full">
        <div className="flex mt-5 ml-40">
        <img 
              src="./images/spotifylogo.png" 
              alt="Spotify Logo" 
              className="absolute w-full max-w-md transform"
              style={{ top: '-40px', left: '9%',rotate: '25deg', zIndex: '2', height: '80px', width: '80px' }} // Adjust top and left for positioning
        />
        <iframe 
          className="w-[300px] h-[400px] rounded-lg shadow-lg " 
          style={{ backgroundColor: "#D6E4C3", zIndex: '1' }} // Light pink background
          src="https://open.spotify.com/embed/playlist/2FYcEZdDlwqyi61Zh3b8DZ?utm_source=generator" 
          allowFullScreen 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        ></iframe>
        <img 
              src="./images/taylor.png" 
              alt="Taylow Swift" 
              className="absolute w-full max-w-md transform scale-50"
              style={{ top: '-300px', left: '20%',rotate: '-15deg' }} // Adjust top and left for positioning
        />
        <img 
              src="./images/sabrina.png" 
              alt="Sabrina Carpenter" 
              className="absolute w-full max-w-md transform scale-50"
              style={{ top: '-50px', left: '-7%', rotate: '15deg' }} // Adjust top and left for positioning
        />
        <img 
              src="./images/pods.png" 
              alt="Auriculares" 
              className="absolute w-full max-w-md transform scale-100"
              style={{ top: '90px', left: '20%', rotate: '40deg' }} // Adjust top and left for positioning
        />
      </div>
      <p className="text-5xl text-gray-700 relative" style={{ fontFamily: 'myOwnCalig', top: '-740px', left: '780px' }}>Past <span className="underline cursor-pointer text-[#D4466E]">PROJECTS</span></p>
        <img 
              src="./images/forward.png" 
              alt="Forward button" 
              className={`absolute transition-transform duration-150 cursor-pointer ${
                pressedButton === "forward1" ? "scale-90" : "scale-100"
              }`}
              style={{ top: "-280px", left: "45%" }}
              onClick={handleForward1}
        />
        <img
          src="./images/back.png"
          alt="Forward button"
          className={`absolute transition-transform duration-150 cursor-pointer ${
            pressedButton === "back1" ? "scale-90" : "scale-100"
          }`}
          style={{ top: "-200px", left: "45%" }}
          onClick={handleBack1}
        />
        <img 
              src="./images/star.png" 
              alt="Green star" 
              className="absolute  w-full max-w-md transform scale-50"
              style={{ top: '-490px', left: '60%' }} // Adjust top and left for positioning
        />
        <img 
              src="./images/VintagePC.png" 
              alt="Vintage PC " 
              className="absolute w-full max-w-md transform scale-100"
              style={{ top: '-300px', left: '50%' }} // Adjust top and left for positioning
        />
        <img
          src={imagePaths[currentImageIndex]}
          alt={`Imagen ${currentImageIndex + 1}`}
          className="absolute w-full max-w-md transform"
          style={{ top: "-300px", left: "50%", scale: "0.7" }}
        />

        <img
          src="./images/forward.png"
          alt="Forward button"
          className={`absolute transition-transform duration-150 cursor-pointer ${
            pressedButton === "forward2" ? "scale-90" : "scale-100"
          }`}
          style={{ top: "-120px", left: "80%" }}
          onClick={handleForward}
        />
        <img
          src="./images/back.png"
          alt="Forward button"
          className={`absolute transition-transform duration-150 cursor-pointer ${
            pressedButton === "back2" ? "scale-90" : "scale-100"
          }`}
          style={{ top: "-40px", left: "80%" }}
          onClick={handleBack}
        />
        </div>
      </div>
    </div>
  );
};

export default DigitalCV;
