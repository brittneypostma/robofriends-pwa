import React from "react";
import Card from "./Card";

const stringTruncate = (str, length) => {
  const dots = str.length > length ? '...' : '';
  return str.substring(0, length)+dots;
}


const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={stringTruncate(robots[i].name.replace(/\s/g, ""), 15)}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
