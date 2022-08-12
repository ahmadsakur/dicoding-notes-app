import React from "react";
import { Archive, Notes } from "../utils/icons";
import { showFormattedDate } from "../utils/index";

function Card(props) {
  const { title, body, createdAt, archived } = props.data;
  return (
    <div className="p-4 max-w-xs text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {title}
        </h5>
        <p className="text-gray-500 text-xs">{showFormattedDate(createdAt)}</p>
      </div>

      <div className="w-1/4 border-b-2 block my-2"></div>
      <p className="mb-3 font-normal text-gray-700">{body}</p>
      <div className="flex item-center gap-x-2">
        <button
          onClick={() => props.setArchive(props.data)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 cursor-pointer"
        >
          {archived ? (
            <>
              <Notes />
              <div>Restore</div>
            </>
          ) : (
            <>
              <Archive />
              <div>Archive</div>
            </>
          )}
        </button>
        <div className="py-2 px-3 text-sm font-medium text-center text-red-800 hover:underline cursor-pointer">
          Delete
        </div>
      </div>
    </div>
  );
}

export default Card;
