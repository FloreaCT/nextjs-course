export default function ProductDetails({ params }) {
  return (
    <div>
      <h1>Product Details</h1>
      <p>This is the product details page for {params.productId}</p>
    </div>
  );
}
