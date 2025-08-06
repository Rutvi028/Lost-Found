import React from 'react';
import ItemCard from './ItemCard';
import { useNavigate } from 'react-router-dom';  

function RecentItem() {

    const navigate = useNavigate();
  return (
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Recently Lost & Found
                </h2>
                <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    Check out the most recent items reported by students
                </p>
            </div>

            <div class="mt-12 grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            <ItemCard /> 
            <ItemCard /> 
            <ItemCard /> 
            </div>
            
            <div class="mt-12 text-center">
                <button onClick={() => {navigate("/browse-items"); scrollTo(0,0)}} class="browse-all-btn inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-all">
                    <i class="fas fa-list mr-2"></i> Browse All Items
                </button>
            </div>
    </div>
  );
}

export default RecentItem;
