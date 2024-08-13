type Review = {
  rating: number
  content: string
}
const ReviewItem = ({ review }: { review: Review }) => {
  return (
    <div className="flex min-h-20 rounded-3xl border bg-white p-5 text-slate-600">
      <h3>Rating: {review.rating}</h3>
      <p>{review.content}</p>
    </div>
  )
}

export default ReviewItem
