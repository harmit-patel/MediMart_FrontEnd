import { FaCalendarAlt, FaExclamationTriangle, FaUserMd } from "react-icons/fa";
import React from 'react';

const OverviewCards = ({ medicines = [] }) => {
  // Add default empty array and null checks
  const totalStock = medicines?.reduce((sum, med) => sum + (med?.quantity || 0), 0) || 0;
  const lowStockMedicines = medicines?.filter((med) => med?.quantity <= med?.reorder_level)?.length || 0;
  const totalMedicines = medicines?.length || 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <FaCalendarAlt className="text-2xl md:text-3xl text-green-500" />
          </div>
          <div className="ml-4">
            <p className="text-lg font-semibold">{totalStock}</p>
            <p className="text-gray-600">Total Inventory</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <FaExclamationTriangle className="text-2xl md:text-3xl text-red-500" />
          </div>
          <div className="ml-4">
            <p className="text-lg font-semibold">{lowStockMedicines}</p>
            <p className="text-gray-600">Low Stock Alerts</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <FaUserMd className="text-2xl md:text-3xl text-blue-500" />
          </div>
          <div className="ml-4">
            <p className="text-lg font-semibold">{totalMedicines}</p>
            <p className="text-gray-600">Total Medicines</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCards;