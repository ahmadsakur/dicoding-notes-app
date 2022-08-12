import React from "react";
import Card from "./Card";

function CardList(props) {
  const { title, data, isArchived } = props;
  const notesData = data.filter((item) => item.archived === isArchived);
  return (
    <div className="w-full md:w-1/2">
      <div className="mx-auto text-xl font-black leading-tight text-gray-900 text-center py-4 md:py-2">
        {title}
      </div>
      <div className="flex flex-row gap-2 flex-wrap justify-around">
        {notesData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
