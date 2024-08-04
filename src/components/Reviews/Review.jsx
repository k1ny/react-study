export const Review = (review) => {
  return (
    <div>
      <span>{review.author}</span>
      <span>{review.text}</span>
      <span>{review.rating}</span>
    </div>
  );
};
