export default function ReviewDetail({ params }) {
  return (
    <div>
      <h1>Review Detail</h1>
      <p>
        This is the review detail page for review {params.reviewId} of product{" "}
        {params.productId}
      </p>
    </div>
  );
}
