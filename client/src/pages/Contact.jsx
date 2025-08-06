import React from 'react';

const Contact = () => {
  return (
    <div className="main-content" id="contact-page">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Have questions or suggestions? Get in touch with our team.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div>
              <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
              <div className="mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-gray-400"></i>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>Student Services Center</p>
                    <p className="mt-1">University Campus</p>
                    <p className="mt-1">123 College Avenue</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start">
                  <div className="flex-shrink-0">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>lostandfound@university.edu</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start">
                  <div className="flex-shrink-0">
                    <i className="fas fa-phone-alt text-gray-400"></i>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
                <div className="mt-4 flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
              <form className="mt-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="contact-name" className="mt-1 form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="contact-email" className="mt-1 form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input type="text" id="contact-subject" className="mt-1 form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="contact-message" rows="4" className="mt-1 form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                  </div>
                  <div className="pt-2">
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//just for github
export default Contact;
