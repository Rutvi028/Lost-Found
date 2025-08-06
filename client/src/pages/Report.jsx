import React from 'react';

const Report = () => {
  return (
    <div className="main-content" id="report-page">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Report a Lost or Found Item
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Help reunite lost items with their owners by reporting them here
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form id="report-form">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="item-title" className="block text-sm font-medium text-gray-700">Title *</label>
                <input type="text" id="item-title" required className="mt-1 form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>

              <div>
                <label htmlFor="item-description" className="block text-sm font-medium text-gray-700">Description *</label>
                <textarea id="item-description" rows="3" required className="mt-1 form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status *</label>
                  <fieldset className="mt-2">
                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      <div className="flex items-center">
                        <input id="status-lost" name="status" type="radio" value="lost" defaultChecked className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                        <label htmlFor="status-lost" className="ml-3 block text-sm font-medium text-gray-700">
                          Lost Item
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="status-found" name="status" type="radio" value="found" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                        <label htmlFor="status-found" className="ml-3 block text-sm font-medium text-gray-700">
                          Found Item
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div>
                  <label htmlFor="item-category" className="block text-sm font-medium text-gray-700">Category *</label>
                  <select id="item-category" required className="mt-1 form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="documents">Documents</option>
                    <option value="clothing">Clothing</option>
                    <option value="accessories">Accessories</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="item-location" className="block text-sm font-medium text-gray-700">Location *</label>
                  <input type="text" id="item-location" required className="mt-1 form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>

                <div>
                  <label htmlFor="item-date" className="block text-sm font-medium text-gray-700">Date *</label>
                  <input type="date" id="item-date" required className="mt-1 form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>

              <div>
                <label htmlFor="item-email" className="block text-sm font-medium text-gray-700">Your Email *</label>
                <input type="email" id="item-email" required className="mt-1 form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                <p className="mt-2 text-sm text-gray-500">This will be displayed to users who want to contact you about the item</p>
              </div>

              <div>
                <label htmlFor="item-image" className="block text-sm font-medium text-gray-700">Upload Image</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="item-image" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Upload a file</span>
                        <input id="item-image" name="item-image" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <input id="terms-agreement" name="terms-agreement" type="checkbox" required className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                <label htmlFor="terms-agreement" className="ml-2 block text-sm text-gray-700">
                  I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">terms and conditions</a>
                </label>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
                  Submit Report
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Report;
