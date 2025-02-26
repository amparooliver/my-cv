import React, { useState, useEffect, useCallback } from "react";

const DigitalCV2 = () => {
  const [isPolaroidOnTop, setIsPolaroidOnTop] = useState(false);
  const [pressedButton, setPressedButton] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const audio = new Audio("./sounds/mouse-click.mp3");
  const retroClick = new Audio("./sounds/retro-click.mp3");

  const imagePaths = [
    "./images/LandingPageMessiBW.png",
    "./images/LandingPageAlmironBW.png",
    "./images/NoMore.png",
  ];

  // Touch handling for mobile carousel
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (diff > 50) handleForward1(); // Swipe left
    if (diff < -50) handleBack1();   // Swipe right
  };

  // Shared handlers
  const togglePolaroidPosition = () => {
    setIsPolaroidOnTop((prev) => !prev);
    audio.currentTime = 0;
    audio.play();
  };

  const handleButtonClick = (button) => {
    retroClick.currentTime = 0;
    retroClick.play();
    setPressedButton(button);
    setTimeout(() => setPressedButton(null), 150);
  };

  // Carousel navigation
  const handleForward = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imagePaths.length);
    handleButtonClick("forward2");
  };

  const handleBack = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? imagePaths.length - 1 : prev - 1
    );
    handleButtonClick("back2");
  };

  const handleForward1 = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imagePaths.length);
    handleButtonClick("forward1");
  };

  const handleBack1 = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? imagePaths.length - 1 : prev - 1
    );
    handleButtonClick("back1");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") handleForward1();
      else if (event.key === "ArrowLeft") handleBack1();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleForward1, handleBack1]);

  return (
    <div className="min-h-screen bg-white bg-[linear-gradient(to_right,transparent_24px,rgba(212,70,110,0.30)_25px,transparent_26px),linear-gradient(to_bottom,transparent_24px,rgba(212,70,110,0.30)_25px,transparent_26px)] bg-[size:25px_25px] flex flex-col items-center p-2 md:p-5 overflow-hidden max-w-[1800px] mx-auto">
      
      {/* Header Section */}
      <div className="w-full relative mb-4 md:mb-0">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <h1 className="text-4xl md:text-7xl font-bold text-[#D4466E] text-center md:text-left mb-4 md:mb-0">
            Amparo Oliver Buzali
          </h1>
          
          {/* Desktop-only iPad Section */}
          <div className="hidden md:block relative w-1/3">
            <img 
              src="./images/ipad.png" 
              alt="iPad and Pencil" 
              className="absolute w-full max-w-md transform -rotate-45 scale-140"
              style={{ top: '-200px', left: '30%' }}
            />
            <p className="text-5xl text-gray-700 rotate-45 relative z-20" 
               style={{ fontFamily: 'myOwnCalig', top: '285px', left: '25px' }}>
              wanna learn more <span className="underline cursor-pointer text-[#D4466E]">ABOUT ME?</span>
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-6xl text-gray-700 text-center md:text-left mt-2 md:ml-40" 
            style={{ fontFamily: 'myOwnCalig' }}>
          Computer Engineer Undergraduate
        </h2>
      </div>

      {/* Main Content Container */}
      <div className="w-full flex flex-col md:flex-row items-start justify-between mt-4 md:mt-7">
        
        {/* Left Column - Polaroid & Bio */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center relative order-2 md:order-1">
          <div className="relative mb-8 md:mb-0">
            <img
              src="./images/polaroid1.png"
              alt="Polaroid"
              className={`transition-transform duration-300 cursor-pointer ${
                isPolaroidOnTop ? 'z-20 scale-110' : 'z-10 scale-100'
              } w-64 md:w-[450px] mx-auto`}
              onClick={togglePolaroidPosition}
            />
            <img
              src="./images/pinknotebook.png"
              alt="Notebook"
              className="hidden md:block relative z-10 -ml-20 mt-8"
              style={{ height: '500px' }}
            />
          </div>

          {/* Mobile Bio Text */}
          <div className="md:hidden text-center px-4 mb-8 font-inter font-semibold text-base text-[#83797C]">
            <p className="text-[#5A5355]">Hi, I’m Amparo!</p>
            <p>An (almost) <span className="text-[#5A5355]">Computer Engineer</span> who loves blending tech with creativity.</p>
            <p>I’m passionate about making life more fun and positive through AI innovations.</p>
          </div>
        </div>

        {/* Desktop Bio Text */}
        <div className="hidden md:block w-1/2 ml-8 self-start mt-4 font-inter font-semibold text-lg text-[#83797C]">
          <p className="text-[#5A5355]">Hi, I’m Amparo!</p>
          <p>An (almost) <span className="text-[#5A5355]">Computer Engineer</span> who loves blending tech with creativity.</p>
          <p>I’m passionate about making life more fun and positive through AI innovations.</p>
          <p>Whether it’s creating smarter solutions or exploring new ideas, I believe in the power</p>
          <p>of technology to brighten everyday moments.</p>
        </div>

        {/* Right Column - Spotify & Projects */}
        <div className="w-full md:w-1/2 flex flex-col items-center order-1 md:order-2">
          
          {/* Spotify Section */}
          <div className="relative w-full max-w-[300px] md:max-w-none mb-8 md:mb-0">
            <img 
              src="./images/spotifylogo.png" 
              alt="Spotify Logo" 
              className="w-12 h-12 md:w-16 md:h-16 absolute -top-4 -left-4 md:-top-6 md:-left-6"
            />
            <iframe 
              className="w-full h-64 md:h-[400px] rounded-lg shadow-lg"
              style={{ backgroundColor: "#D6E4C3" }}
              src="https://open.spotify.com/embed/playlist/2FYcEZdDlwqyi61Zh3b8DZ?utm_source=generator" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>

          {/* Projects Section */}
          <div className="relative w-full mt-8 md:mt-0">
            <p className="text-3xl md:text-5xl text-gray-700 text-center mb-4" 
               style={{ fontFamily: 'myOwnCalig' }}>
              Past <span className="underline cursor-pointer text-[#D4466E]">PROJECTS</span>
            </p>
            
            <div className="relative flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-96 md:h-96"
                   onTouchStart={handleTouchStart}
                   onTouchEnd={handleTouchEnd}>
                <img
                  src={imagePaths[currentImageIndex]}
                  alt={`Project ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                
                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-4">
                  <img
                    src="./images/back.png"
                    alt="Back button"
                    className="w-8 h-8 md:w-12 md:h-12 cursor-pointer hover:scale-105 transition-transform"
                    onClick={handleBack1}
                  />
                  <img
                    src="./images/forward.png"
                    alt="Forward button"
                    className="w-8 h-8 md:w-12 md:h-12 cursor-pointer hover:scale-105 transition-transform"
                    onClick={handleForward1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop-only Decorative Elements */}
      <div className="hidden md:block">
        <img 
          src="./images/taylor.png" 
          alt="Taylor Swift" 
          className="absolute w-32 transform scale-50"
          style={{ top: '40%', left: '5%', rotate: '-15deg' }}
        />
        <img 
          src="./images/sabrina.png" 
          alt="Sabrina Carpenter" 
          className="absolute w-32 transform scale-50"
          style={{ top: '60%', left: '5%', rotate: '15deg' }}
        />
        <img 
          src="./images/pods.png" 
          alt="Headphones" 
          className="absolute w-32 transform scale-100"
          style={{ top: '70%', left: '15%', rotate: '40deg' }}
        />
        <img 
          src="./images/star.png" 
          alt="Green star" 
          className="absolute w-32 transform scale-50"
          style={{ top: '40%', right: '10%' }}
        />
        <img 
          src="./images/VintagePC.png" 
          alt="Vintage PC" 
          className="absolute w-32 transform scale-100"
          style={{ top: '50%', right: '15%' }}
        />
      </div>
    </div>
  );
};

export default DigitalCV2;