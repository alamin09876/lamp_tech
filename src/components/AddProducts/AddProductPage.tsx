"use client";
import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

export default function AddProductPage() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-orange-600 text-white flex flex-col items-center py-8">
        <div className="font-bold text-2xl mb-8">Shop-First</div>
        <div className="w-full px-4">
          <div className="bg-white text-orange-600 rounded px-4 py-2 cursor-pointer font-medium">
            Products
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <div className="flex items-center mb-6">
          <button className="text-orange-600 mr-4">⬅</button>
          <h1 className="text-2xl font-bold">Products</h1>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="bg-blue-900 text-white text-lg font-semibold px-4 py-2 rounded-t-md">
            Add Products
          </div>
          <form className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Products Name <span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="Ex: Camera"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Price <span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="25,000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Detail <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full border border-blue-200 bg-blue-50 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-400"
                // rows="5"
                placeholder="Enter product details"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
