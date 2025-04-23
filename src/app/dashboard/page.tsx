"use client";

import ProductsPage from "@/components/Dashboard/ProductsPage";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [checkedAuth, setCheckedAuth] = useState(false);

  useEffect(() => {
    // Wait for auth context to load
    if (user === null) {
      const token = document.cookie.includes("access_token");
      if (!token) {
        router.replace("/login");
      }
    }
    setCheckedAuth(true);
  }, [user, router]);

  if (!checkedAuth) return <p>Loading...</p>;

  return (
    <div>
      <ProductsPage />
    </div>
  );
}
