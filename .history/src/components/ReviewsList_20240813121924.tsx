import ReviewItem from "./ReviewItem"
const reviews = [
  { id: 1, rating: 5, content: "Great book!" },
  { id: 2, rating: 3, content: "Ok book!" },
  { id: 3, rating: 2, content: "Bad book!" },
]

const ReviewsList = () => {
  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map(review => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  )
}
export default ReviewsList