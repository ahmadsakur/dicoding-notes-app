import React from "react";
function Card(data) {
  return (
    <div className="p-4 max-w-xs text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          Noteworthy technology acquisitions 2021
        </h5>
      </a>
      <div className="w-1/4 border-b-2 block my-2"></div>
      <p className="mb-3 font-normal text-gray-700">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <div className="flex item-center gap-x-2">
        <div className="py-2 px-3 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300">
          Move to Archive
        </div>
        <div className="py-2 px-3 text-sm font-medium text-center text-red-800 hover:underline ">
          Delete
        </div>
      </div>
    </div>
  );
}

export default Card;
