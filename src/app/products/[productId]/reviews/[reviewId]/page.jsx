import { notFound } from "next/navigation";
export default function ReviewDetail({ params }) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
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
