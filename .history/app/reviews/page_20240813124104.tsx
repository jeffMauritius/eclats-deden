import ReviewsList from "@/components/ReviewsList"

const ReviewsPage = () => {
  return (
    <div>
      <h1>Avis et commentaires</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <ReviewsList />
      </div>
    </div>
  )
}

export default ReviewsPage
