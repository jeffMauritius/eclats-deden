const ReviewsList = () => {
  const reviews = useReviews()
  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  )
}
export default ReviewsList
