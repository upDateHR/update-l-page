const QualifierTest = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl text-center font-bold text-gray-900 mb-12">
          Qualifier Test Details
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT 30% IMAGE */}
          <div className="lg:w-[30%]">
            <img
              src="/Raksha.png"
              alt="Qualifier Test"
              className="rounded-3xl shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* RIGHT 70% CONTENT */}
          <div className="lg:w-[70%] flex flex-col gap-8">
            {/* TOP BOX */}
            <div className="bg-white rounded-3xl shadow-md p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                1. Test Topics
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600">
                <li>✔ Quantitative Aptitude</li>
                <li>✔ Logical Reasoning</li>
                <li>✔ Data Interpretation</li>
                <li>✔ Verbal Ability</li>
              </ul>
            </div>

            {/* BOTTOM 2 BOXES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Registration Box */}
              <div className="bg-white rounded-3xl shadow-md p-8 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  2. Registration Process
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Pay <span className="font-semibold text-gray-900">₹99</span>
                  and choose your preferred test slot.
                </p>
              </div>

              {/* Things to Remember */}
              <div className="bg-white rounded-3xl shadow-md p-8 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  3. Things to Remember
                </h3>

                <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                  <li>• Test duration: 60 minutes</li>
                  <li>• Unlock free mock test before final exam</li>
                  <li>• Only one attempt allowed</li>
                  <li>• Use desktop/laptop only</li>
                  <li>• Supported browsers: Chrome, Safari, Edge, Firefox</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualifierTest;
