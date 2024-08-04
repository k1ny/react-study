import { useMemo } from "react";
import { FilmDetails } from "./components/FilmDetails/FilmDetails.jsx";
import { Reviews } from "./components/Reviews/Reviews.jsx";
import { NewReviewForm } from "./components/newReviewForm/NewReviewForm.jsx";

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
  const filmRaiting = useMemo(() => {
    return Math.floor(
      filmDetails.reviews.reduce((sum, review) => {
        return sum + review.rating;
      }, 0) / filmDetails.reviews.length,
    );
  }, [filmDetails.reviews]);

  return (
    <div>
      <FilmDetails
        title={filmDetails.title}
        genre={filmDetails.genre}
        seasonsCount={filmDetails.seasonsCount}
      />
      <Reviews reviews={filmDetails.reviews} />
      <NewReviewForm />
    </div>
  );
}

export default App;
