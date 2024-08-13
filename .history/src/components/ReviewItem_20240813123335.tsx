type Review = {
  rating: number
  content: string
}
const ReviewItem = ({ review }: { review: Review }) => {
  return (
    <div className="rounded-1xl flex border bg-white text-slate-600">
      <h3>Rating: {review.rating}</h3>
      <p>{review.content}</p>
    </div>
  )
}

export default ReviewItem