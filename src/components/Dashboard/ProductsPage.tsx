"use client";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbCertificate2 } from "react-icons/tb";
import image from "../../../public/assest/dashboard/Icon_body.png";
import imageOne from "../../../public/assest/dashboard/exit-log-out.png";

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
        <div className=" px-8 flex bg-[#062D3E] gap-3">
          <div className="pt-3">
            <TbCertificate2 className="" />
          </div>
          <div className="rounded py-2 cursor-pointer font-medium">
            Products
          </div>
        </div>
      </aside>

      <main className="flex-1 bg-gray-100 px-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Products</h1>
          </div>
          <div className="flex gap-4">
            <Image
              src={image}
              width={50}
              height={50}
              alt="Decoration"
              className="pt-4"
            />
            <div className="pt-4">
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

        <div className="mb-4 flex w-full gap-6">
          <div className="">
            <input
              placeholder="Search Products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[300px] border border-[#FF6F47] py-2 px-2"
            />
          </div>
          <div>
            <Link href={"/addProducts"}>
              <button className=" bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-[10px]  text-sm transition">
                Add New +
              </button>
            </Link>
          </div>
        </div>

        <div className="pb-8">
          <table className="w-full bg-white rounded-lg shadow overflow-hidden mb-10 py-20">
            <thead className="bg-[#062D3E] text-white">
              <tr>
                <th className="text-left px-6 py-3">Product Name</th>
                <th className="text-left px-6 py-3">Price</th>
                <th className="text-left px-6 py-3">Detail</th>
                <th className="text-left px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={index} className="border-t ">
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
        </div>
      </main>
    </div>
  );
}
