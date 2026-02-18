import React from "react";
import { useNavigate } from "react-router-dom";

const CourseDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold leading-tight text-gray-900">
              Why choose this course?
            </h1>

            <h3 className="text-4xl py-3 lg:text-xl font-bold leading-tight text-red-500">
              A premier pathway to mastering AI & ML, designed by IIT experts
            </h3>

            <button onClick={() => navigate("/signup")} className="mt-8 bg-red-500 hover:bg-red-600 transition duration-300 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md cursor-pointer">
              REGISTER NOW
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/certificate.jpg"
              alt="AI and ML Program"
              className=" h-50 rounded-4xl max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Box 1 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-900">
                  Certification from E&ICT Academy, IIT Roorkee
                </h2>
                <p className="mt-3 text-gray-600">
                  Earn a Certificate of Completion from E&ICT Academy, IIT
                  Roorkee, recognizing your learning and achievement.
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-900">
                  Campus Immersion
                </h2>
                <p className="mt-3 text-gray-600">
                  Optional 3-day campus immersion to interact with
                  faculty/experts, peers, and the institute ecosystem.
                </p>
              </div>

              {/* Box 3 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-900">
                  Future-Ready Career Path
                </h2>
                <p className="mt-3 text-gray-600">
                  Build in-demand AI & ML skills through hands-on learning
                  guided by expert faculty and industry practitioners.
                </p>
              </div>

              {/* Box 4 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-900">
                  Industry-Aligned Curriculum
                </h2>
                <p className="mt-3 text-gray-600">
                  Learn cutting-edge AI & Machine Learning through interactive
                  sessions, coding exercises, and structured evaluations.
                </p>
              </div>

              {/* Box 5 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-900">
                  Project-Based Learning
                </h2>
                <p className="mt-3 text-gray-600">
                  Work on hands-on projects across Python, data handling, ML,
                  and Generative AI, apply LLM concepts, LangChain workflows,
                  and deployment to solve real-world problems.
                </p>
              </div>

              {/* Box 6 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-900">
                  Career Support (via upDate)
                </h2>
                <p className="mt-3 text-gray-600">
                  Resume reviews, career coaching, and placement assistance to
                  support your job search (eligibility: 65% attendance & 70%
                  overall marks).
                </p>
              </div>
            </div>
          </div>
          <p className="mt-10 text-black-500 text-lg flex justify-center italic">
            Certificate Eligibility: Minimum 65% overall attendance and 35% in
            the cumulative evaluation score.
          </p>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
