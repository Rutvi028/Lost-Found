import React from 'react';

const Hero = () => {
  return (
    <div className="gradient-bg bg-blue-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Lost something on campus?
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Our community helps students reunite with their lost belongings. Report or browse items easily.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="report-lost-btn inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all"
              >
                <i className="fas fa-search mr-2" /> Report Lost Item
              </a>
              <a
                href="#"
                className="report-found-btn inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-all"
              >
                <i className="fas fa-hands-helping mr-2" /> Report Found Item
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Students on campus"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
