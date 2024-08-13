import ReviewItem from "./ReviewItem"
const reviews = [
  { id: 1, rating: 5, content: "Great book!" },
  { id: 2, rating: 3, content: "Ok book!" },
  { id: 3, rating: 2, content: "Bad book!" },
]

const ReviewsList = () => {
  return (
    <div className="grid gap-6 p-3 md:grid-cols-2">
      {reviews.map(review => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  )
}
export default ReviewsList
