type Review = {
  rating: number
  content: string
}
const ReviewItem = ({ review }: { review: Review }) => {
  return (
    <div>
      <h3>Rating: {review.rating}</h3>
      <p>{review.content}</p>
    </div>
  )
}

export default ReviewItem
