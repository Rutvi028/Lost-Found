import React from "react";

function ItemCard() {
  return (
    <>
      <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover transition-all">
        <div class="h-48 bg-gray-200 flex items-center justify-center">
          <i class="fas fa-laptop text-5xl text-gray-400"></i>
        </div>
        <div class="p-6">
          <div class="flex items-center">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
              Lost
            </span>
            <span class="ml-2 text-sm text-gray-500">2 days ago</span>
          </div>
          <h3 class="mt-2 text-xl font-semibold text-gray-900">MacBook Pro</h3>
          <p class="mt-2 text-gray-600">
            Left in the library near window seat. Silver, 13-inch, with a
            sticker of a cat on the back.
          </p>
          <div class="mt-4 flex items-center">
            <div class="flex-shrink-0">
              <i class="fas fa-map-marker-alt text-gray-400"></i>
            </div>
            <div class="ml-3">
              <p class="text-sm text-gray-500">Central Library, 2nd Floor</p>
            </div>
          </div>
          <div class="mt-6">
            <button class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all">
              <i class="fas fa-envelope mr-2"></i> Contact Finder
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
