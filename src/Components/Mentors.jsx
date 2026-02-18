import React from "react";

const Mentors = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 bg-[#FFFFFF]">
        <h1 className="text-2xl flex justify-center lg:text-4xl font-bold leading-tight text-gray-900">
          Our Instructors and Industry Mentors
        </h1>

        <div className="max-w-6xl mx-auto px-1 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row p-6 gap-6">
                <div className="w-32 aspect-square">
                  <img
                    src="/Raksha.png"
                    alt="AI Program"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="md:w-2/3 flex flex-col justify-center">
                  <h2 className="text-sm font-bold text-gray-900">
                    Prof. Raksha Sharma
                  </h2>
                  <p className="mt-1 text-gray-600 leading-relaxed text-sm">
                    Associate Professor, IIT Roorkee
                  </p>
                  <p className="mt-1 font-semibold text-blue-600 leading-relaxed text-sm">
                    <a href="#">Linkedin</a>
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <p className="text-gray-700 leading-relaxed text-sm">
                  Build real-world AI applications and strengthen your
                  portfolio.
                </p>

                <button className="mt-2 text-red-500 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row p-6 gap-6">
                <div className="w-32 aspect-square">
                  <img
                    src="/Sumit.png"
                    alt="AI Program"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="md:w-2/3 flex flex-col justify-center">
                  <h2 className="text-sm font-bold text-gray-900">
                    Prof. Raksha Sharma
                  </h2>
                  <p className="mt-1 text-gray-600 leading-relaxed text-sm">
                    Associate Professor, IIT Roorkee
                  </p>
                  <p className="mt-1 font-semibold text-blue-600 leading-relaxed text-sm">
                    <a href="#">Linkedin</a>
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <p className="text-gray-700 leading-relaxed text-sm">
                  Build real-world AI applications and strengthen your
                  portfolio.
                </p>

                <button className="mt-2 text-red-500 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row p-6 gap-6">
                <div className="w-32 aspect-square">
                  <img
                    src="/Ritesh.png"
                    alt="AI Program"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="md:w-2/3 flex flex-col justify-center">
                  <h2 className="text-sm font-bold text-gray-900">
                    Prof. Raksha Sharma
                  </h2>
                  <p className="mt-1 text-gray-600 leading-relaxed text-sm">
                    Associate Professor, IIT Roorkee
                  </p>
                  <p className="mt-1 font-semibold text-blue-600 leading-relaxed text-sm">
                    <a href="#">Linkedin</a>
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <p className="text-gray-700 leading-relaxed text-sm">
                  Build real-world AI applications and strengthen your
                  portfolio.
                </p>

                <button className="mt-2 text-red-500 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
