"use client";
import { createProduct } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { TbCertificate2 } from "react-icons/tb";
import image from "../../../public/assest/dashboard/Icon_body.png";
import imageOne from "../../../public/assest/dashboard/exit-log-out.png";

export default function AddProductPage() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await createProduct({
        product_name: productName,
        product_price: price,
        product_details: detail,
      });

      console.log("Product created:", res);
      alert("Product added successfully!");
      setProductName("");
      setPrice("");
      setDetail("");
    } catch (err) {
      console.error("Error creating product:", err);
      alert("Failed to add product");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/5 bg-orange-600 text-white flex flex-row md:flex-col justify-between md:items-center px-4 py-4 md:py-8">
        <div className="flex flex-col md:items-center md:gap-8 w-full">
          <div className="font-bold text-xl md:text-2xl mb-4 md:mb-8">
            <Link href={"/"}>Shop-First</Link>
          </div>
          <div className="flex items-center gap-2 bg-[#062D3E] px-4 py-2 rounded">
            <TbCertificate2 />
            <span className="font-medium">Products</span>
          </div>
        </div>
      </aside>

      <main className="flex-1 bg-gray-100 p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex gap-3 items-center">
            <div className="bg-[#ED5C01] text-white p-2 rounded-4xl">
              <Link href="/dashboard">
                <FaArrowLeft />
              </Link>
            </div>
            <h1 className="text-xl md:text-2xl font-bold">Products</h1>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src={image}
              width={40}
              height={40}
              alt="Decoration"
              className="pt-2 md:pt-6"
            />
            <div className="pt-2 md:pt-6">
              <Image
                src={imageOne}
                width={40}
                height={40}
                alt="Decoration"
                className="bg-[#ED5C01] rounded-4xl p-2"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 md:p-6">
          <div className="bg-[#062D3E] text-white text-base md:text-lg font-semibold px-4 py-2 rounded-t-md">
            Add Products
          </div>
          <form className="p-4 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full border p-2 rounded"
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
                  className="w-full border p-2 rounded"
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
                placeholder="Enter product details"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded"
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
