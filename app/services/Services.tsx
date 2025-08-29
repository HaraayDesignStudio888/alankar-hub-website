"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { servicesData, categories } from "./servicesData";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
};

const Services = () => {
  const searchParams = useSearchParams();
  const categoryFromQuery = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (categoryFromQuery) {
      setSelectedCategory(categoryFromQuery);
    }
  }, [categoryFromQuery]);

  const filteredServices: Service[] = servicesData.filter((service) => {
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="main-content px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text">
          Our Services
        </h1>
        <p className="text-gray-600 mt-3">
          High-quality printing solutions tailored for your business and personal needs.
        </p>
      </div>

      {/* Search + Categories in one line */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-5 py-3 w-72 sm:w-96 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <div className="text-center text-gray-600 mb-8">
        Showing <span className="font-semibold">{filteredServices.length}</span> services
        {selectedCategory !== "All" && ` in ${selectedCategory}`}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredServices.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-xl transition-transform hover:scale-105"
          >
            <div className="relative h-56">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-pink-500 text-white px-3 py-1 rounded-full text-sm">
                {item.category}
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredServices.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <h3 className="text-2xl font-semibold">No services found</h3>
          <p className="mt-1">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};
// ;;;;;;
export default Services;
