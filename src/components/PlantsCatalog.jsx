import { useState } from "react";

import plant1 from "../assets/plant1.jpg";
import plant2 from "../assets/plant2.jpg";
import plant3 from "../assets/plant3.jpg";

const PlantsCatalog = () => {
  // DATA
  const plants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      desc: "The iconic Swiss Cheese plant for bold spaces.",
      price: "$45.00",
      category: "Indoor",
      image: plant1,
    },
    {
      id: 2,
      name: "Bird of Paradise",
      desc: "Statuesque foliage that brings a tropical vibe.",
      price: "$89.00",
      category: "Outdoor",
      image: plant2,
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      desc: "A high-fashion plant with large, lush leaves.",
      price: "$62.00",
      category: "Indoor",
      image: plant3,
    },
  ];

  // STATE FILTER
  const [activeFilter, setActiveFilter] = useState("All");

  // LOGIC FILTER
  const filteredPlants =
    activeFilter === "All"
      ? plants
      : plants.filter((plant) => plant.category === activeFilter);

  return (
    <section id="plants" className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900">
          Elegant Collections
        </h2>
        <p className="text-gray-500 mt-2">
          Discover our premium hand-picked favorites
        </p>
      </div>

      {/* ================= FILTER ================= */}
      <div className="flex gap-6 text-sm mb-8 border-b border-b-gray-400">
        {["All", "Indoor", "Outdoor"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`font-semibold pb-2 transition ${
              activeFilter === filter
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-green-600"
            }`}
          >
            {filter === "All" ? "All Plants" : filter}
          </button>
        ))}
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative h-100 group overflow-hidden">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover transition-transform duration-400 hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-400 group-hover:opacity-80" />

              {/* BUTTON ON HOVER */}
              <button className="absolute inset-0 m-auto h-10 w-32 bg-white/90 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                View Details
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-900">{plant.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600">
                  {plant.category}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-4">{plant.desc}</p>

              <span className="font-semibold text-gray-900">{plant.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantsCatalog;
