"use client";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const products = [
  {
    name: "Camera",
    price: "18.00",
    desc: "Description: Get closer to the action with the HD Digital Camera. This versatile camera offers powerful zoom, specialized imaging, and multiple pre-settings.",
  },
  {
    name: "Camera",
    price: "25.00",
    desc: "Description: Get closer to the action with the HD Digital Camera. This versatile camera offers powerful zoom, specialized imaging, and multiple pre-settings.",
  },
  {
    name: "Camera",
    price: "21.00",
    desc: "Description: Get closer to the action with the HD Digital Camera. This versatile camera offers powerful zoom, specialized imaging, and multiple pre-settings.",
  },
  {
    name: "Camera",
    price: "35.00",
    desc: "Description: Get closer to the action with the HD Digital Camera. This versatile camera offers powerful zoom, specialized imaging, and multiple pre-settings.",
  },
  {
    name: "Camera",
    price: "26.00",
    desc: "Description: Get closer to the action with the HD Digital Camera. This versatile camera offers powerful zoom, specialized imaging, and multiple pre-settings.",
  },
  {
    name: "Camera",
    price: "25.00",
    desc: "Description: Get closer to the action with the HD Digital Camera. This versatile camera offers powerful zoom, specialized imaging, and multiple pre-settings.",
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <aside className="w-1/5 bg-orange-600 text-white flex flex-col items-center py-8">
        <div className="font-bold text-2xl mb-8">Shop-First</div>
        <div className="w-full px-4">
          <div className="bg-white text-orange-600 rounded px-4 py-2 cursor-pointer font-medium">
            Products
          </div>
        </div>
      </aside>

      <main className="flex-1 bg-gray-100 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Products</h1>
          <button>Add New +</button>
        </div>

        <div className="mb-4">
          <input
            placeholder="Search Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-1/3"
          />
        </div>

        <table className="w-full bg-white rounded-lg shadow overflow-hidden">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="text-left px-6 py-3">Product Name</th>
              <th className="text-left px-6 py-3">Price</th>
              <th className="text-left px-6 py-3">Detail</th>
              <th className="text-left px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {product.desc}
                </td>
                <td className="px-6 py-4 flex space-x-2">
                  <Pencil className="w-5 h-5 text-blue-600 cursor-pointer" />
                  <Trash2 className="w-5 h-5 text-red-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
