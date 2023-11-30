import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <Link className="ml-4" href="/about">
        About
      </Link>
      <Link href="/products">Products</Link>
    </div>
  );
}
