import { HiOutlineSun } from "react-icons/hi";
import { IoWaterOutline } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";

const PlantCare = () => {
  return (
    <section className="bg-[#f6f8ef] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-3">Plant Care 101</h2>
        <p className="text-center text-sm text-green-700 mb-12">
          Simple tips to keep your green friends thriving for years to come.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            className="
              bg-white rounded-xl p-6
              border border-transparent
              hover:border-green-500
              shadow-sm hover:shadow-md
              transition-all duration-200
            "
          >
            <div className="mb-4">
              <IoWaterOutline className="text-green-500 text-2xl" />
            </div>
            <h4 className="font-semibold mb-2">Watering Wisely</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Most indoor plants prefer the &quot;soak and dry&quot; method.
              Wait until the top 2 inches of soil are dry.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
              bg-white rounded-xl p-6
              border border-transparent
              hover:border-green-500
              shadow-sm hover:shadow-md
              transition-all duration-200
            "
          >
            <div className="mb-4">
              <HiOutlineSun className="text-green-500 text-2xl" />
            </div>
            <h4 className="font-semibold mb-2">Light Needs</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Bright, indirect light is the gold standard for most tropicals.
              Avoid direct midday sun to prevent leaf burn.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
              bg-white rounded-xl p-6
              border border-transparent
              hover:border-green-500
              shadow-sm hover:shadow-md
              transition-all duration-200
            "
          >
            <div className="mb-4">
              <LuLayoutGrid className="text-green-500 text-2xl" />
            </div>
            <h4 className="font-semibold mb-2">Soil Health</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Use well-draining soil mixes with perlite or orchid bark to ensure
              root systems can breathe properly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantCare;
