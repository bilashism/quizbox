import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:px-6 md:py-8 dark:bg-gray-900">
      <div className="container mx-auto">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <p className="text-sm text-gray-500 text-center dark:text-gray-400">
          © 2022 QuizBox. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
