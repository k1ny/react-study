import { useEffect } from "react";
import { useState } from "react";
import { useCount } from "../hooks/setCount";
import { FilmInfo } from "./FilmInfo";

export const FilmDetails = ({ title, genre, seasonsCount }) => {
  const { count, increment, decrement } = useCount(0);
  useEffect(() => {
    console.log("count = ", count);
    return () => {};
  }, [count]);

  return (
    <>
      <FilmInfo title={title} genre={genre} seasonsCount={seasonsCount} />
      <div>
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};
