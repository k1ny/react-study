import { useState } from "react";

export const NewReviewForm = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>

      <label>
        Rating:
        <input
          type="number"
          max={10}
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
      </label>
    </div>
  );
};
