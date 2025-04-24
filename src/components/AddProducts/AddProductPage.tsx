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
    <div className="flex h-screen">
      <aside className="w-1/5 bg-orange-600 text-white flex flex-col items-center py-8">
        <div className="font-bold text-2xl mb-8">Shop-First</div>
        <div className=" px-8 flex bg-[#062D3E] gap-3">
          <div className="pt-3">
            <TbCertificate2 className="" />
          </div>
          <div className="rounded py-2 cursor-pointer font-medium">
            Products
          </div>
        </div>
      </aside>

      <main className="flex-1 bg-gray-100 p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-3">
            <div className=" bg-[#ED5C01] text-white p-2 rounded-4xl">
              <Link href={"/dashboard"}>
                <FaArrowLeft className="" />
              </Link>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Products</h1>
            </div>
          </div>
          <div className="flex gap-4">
            <Image
              src={image}
              width={50}
              height={50}
              alt="Decoration"
              className="pt-6"
            />
            <div className="pt-6">
              <Image
                src={imageOne}
                width={50}
                height={50}
                alt="Decoration"
                className=" bg-[#ED5C01] rounded-4xl p-2"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="bg-blue-900 text-white text-lg font-semibold px-4 py-2 rounded-t-md">
            Add Products
          </div>
          <form className="p-4 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Products Name <span className="text-red-500">*</span>
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
