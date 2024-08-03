import { useEffect } from "react";
import { useState } from "react";
import { useCount } from "../hooks/setCount";

export const FilmDetails = ({ title, genre, seasonsCount }) => {
  const { count, increment, decrement } = useCount(0);
  useEffect(() => {
    console.log("count = ", count);
    return () => {};
  }, [count]);

  return (
    <div>
      <p>{title || "uknown film"}</p>
      {Boolean(genre) && <p>{genre}</p>}
      <p>{seasonsCount > 0 ? `Кол-во сезонов: ${seasonsCount}` : "Нет"}</p>
      <div>
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};
