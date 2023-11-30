export default function ReviewPage({ params }) {
  return (
    <div>
      <h1>Review</h1>
      <p>This is the review page for product {params.productId} </p>
    </div>
  );
}
