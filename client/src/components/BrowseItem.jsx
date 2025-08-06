import React from 'react'

function BrowseItem() {
  return (
    <>
  {/* Browse Items Page (hidden by default) */}
  <div className="main-content hidden" id="browse-page">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Browse Lost &amp; Found Items
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Search for items or filter by category
        </p>
      </div>
    </div>
  </div>
</>

  )
}
// just for github
export default BrowseItem
