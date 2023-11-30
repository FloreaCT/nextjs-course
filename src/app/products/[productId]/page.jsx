export const generateMetadata = async ({ params }) => {
  const title = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`for Iphone ${params.productId}`);
    }, 100);
  });

  return {
    title: `Product Details ${title}`,
  };
};

export default function ProductDetails({ params }) {
  return (
    <div>
      <h1>Product Details</h1>
      <p>This is the product details page for {params.productId}</p>
    </div>
  );
}
