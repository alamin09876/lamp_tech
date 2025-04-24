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
    desc: "Get closer to the action with the HD Digital Camera. This versatile camera offers powerful zoom, specialized imaging, and multiple pre-settings.",
  },
  {
    name: "Camera",
    price: "25.00",
    desc: "Get closer to the action with the HD Digital Camera. This versatile camera offers powerful zoom, specialized imaging, and multiple pre-settings.",
  },
  {
    name: "Camera",
    price: "21.00",
    desc: "Get closer to the action with the HD Digital Camera. This versatile camera offers powerful zoom, specialized imaging, and multiple pre-settings.",
  },
  {
    name: "Camera",
    price: "35.00",
    desc: "Get closer to the action with the HD Digital Camera. This versatile camera offers powerful zoom, specialized imaging, and multiple pre-settings.",
  },
  {
    name: "Camera",
    price: "26.00",
    desc: "Get closer to the action with the HD Digital Camera. This versatile camera offers powerful zoom, specialized imaging, and multiple pre-settings.",
  },
  {
    name: "Camera",
    price: "25.00",
    desc: "Get closer to the action with the HD Digital Camera. This versatile camera offers powerful zoom, specialized imaging, and multiple pre-settings.",
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-auto">
      <aside className="w-full lg:w-1/5 bg-orange-600 text-white flex lg:flex-col items-center justify-between lg:justify-start py-4 px-4">
        <div className="font-bold text-xl lg:text-2xl mb-4 lg:mb-8">
          <Link href={"/"}>Shop-First</Link>
        </div>
        <div className="flex items-center bg-[#062D3E] px-4 py-2 rounded-md gap-3">
          <TbCertificate2 className="text-xl" />
          <span className="font-medium text-sm lg:text-base">Products</span>
        </div>
      </aside>

      <main className="flex-1 bg-gray-100 px-4 md:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-xl md:text-2xl font-bold">Products</h1>
          <div className="flex gap-4 items-center">
            <Image src={image} width={40} height={40} alt="Decoration" />
            <Image
              src={imageOne}
              width={40}
              height={40}
              alt="Logout"
              className="bg-[#ED5C01] rounded-full p-2"
            />
          </div>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row gap-4 w-full">
          <div className="lg:w-[300px] w-full">
            <input
              placeholder="Search Products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-[#FF6F47] py-2 px-3 rounded-md"
            />
          </div>
          <Link href="/addProducts">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded text-sm transition lg:-ml-16 ml-0">
              Add New +
            </button>
          </Link>
        </div>

        <div className="pb-8">
          <div className="hidden lg:block">
            <table className="w-full bg-white rounded-lg shadow overflow-hidden mb-10">
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
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4">{product.name}</td>
                    <td className="px-6 py-4">${product.price}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {product.desc}
                    </td>
                    <td className="px-6 py-4 flex space-x-2">
                      <Link href="/productDetails">
                        <Pencil className="w-5 h-5 text-blue-600 cursor-pointer" />
                      </Link>
                      <Link href="/productDetails">
                        <Trash2 className="w-5 h-5 text-red-600 cursor-pointer" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:hidden flex flex-col gap-4">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 space-y-2"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-base">{product.name}</h3>
                  <span className="text-sm font-medium text-orange-600">
                    ${product.price}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{product.desc}</p>
                <div className="flex gap-4">
                  <Link href="/productDetails">
                    <Pencil className="w-5 h-5 text-blue-600 cursor-pointer" />
                  </Link>
                  <Link href="/productDetails">
                    <Trash2 className="w-5 h-5 text-red-600 cursor-pointer" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
