import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 border-t border-gray-200">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12 py-6 
               flex flex-col md:flex-row 
               justify-between items-center md:items-start gap-4"
        >
          {/* Left Side */}
          <div className="text-sm text-gray-600 text-center md:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} Nolan Edutech Private Limited. All
              rights reserved.
            </p>
            <p>
              Incubex HSR21, 5th Main Rd, Sector 6, HSR Layout, Bengaluru,
              Karnataka 560102.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex gap-1 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-700 transition underline">
              Privacy Policy
            </a>

            <span>&</span>

            <a href="#" className="hover:text-gray-700 transition underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
