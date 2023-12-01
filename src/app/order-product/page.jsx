"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    alert("Order has been placed");
    router.push("/");
  };
  return (
    <div>
      <h1>Order Product</h1>
      <p>This is the order product page</p>
      <button onClick={handleClick}>Order</button>
    </div>
  );
}
