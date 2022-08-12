import React from "react";
import Card from "./Card";

function CardList(props) {
  const { title, data, isArchived, archive, deleteNote } = props;
  const notesData = data.filter((item) => item.archived === isArchived);
  return (
    <div className="w-full md:w-1/2">
      <div className="mx-auto text-xl font-black leading-tight text-gray-900 text-center md:my-2 border-b-2 p-2">
        {title}
      </div>
      <div className="flex flex-row gap-2 flex-wrap justify-around mt-3">
        {notesData.length > 0 ? (
          notesData.map((item) => (
            <Card
              key={item.id}
              data={item}
              setArchive={archive}
              setDelete={deleteNote}
            />
          ))
        ) : (
          <div className="mx-auto text-xl font-medium leading-tight text-gray-900 text-center md:my-2">
            {isArchived ? "No archived notes" : "No notes"}
          </div>
        )}
      </div>
    </div>
  );
}

export default CardList;
