import { FilmDetails } from "./components/FilmDetails";

function App() {
  const filmDetails = {
    id: "1",
    title: "The Simpsons",
    seasonsCount: "33",
    genre: "comedy",
    similar: [
      {
        id: "2",
        title: "The Griffins",
      },
    ],
    reviews: [
      {
        id: "3",
        author: "Max",
        text: "Great cartoon",
        rating: "10",
      },
    ],
  };
  return (
    <div>
      <FilmDetails
        title={filmDetails.title}
        genre={filmDetails.genre}
        seasonsCount={filmDetails.seasonsCount}
      />
    </div>
  );
}

export default App;
