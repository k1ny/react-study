export const FilmInfo = ({ title, genre, seasonsCount }) => {
  return (
    <>
      <p>{title || "uknown film"}</p>
      {Boolean(genre) && <p>{genre}</p>}
      <p>{seasonsCount > 0 ? `Кол-во сезонов: ${seasonsCount}` : "Нет"}</p>
    </>
  );
};
