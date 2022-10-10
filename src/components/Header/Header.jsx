import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600 pt-8 lg:pt-20 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto flex gap-8 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Button
            </button>
          </div>
        </div>

        <figure className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <picture className="">
            <source srcSet="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" />
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
              alt="Quiz Banner"
              className="object-cover object-center rounded"
              loading="lazy"
              width="720"
              height="480"
              decoding="async"
              fetchpriority="low"
            />
          </picture>
        </figure>
      </div>
    </header>
  );
};

export default Header;
