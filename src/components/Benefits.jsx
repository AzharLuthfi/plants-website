import { HiShieldCheck } from "react-icons/hi";

const Benefits = () => {
  return (
    <section className="bg-[#f6f8ef] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-center font-bold text-2xl mb-12">
          Why Choose Our Plants?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Card */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-200 p-4 rounded-full mb-4">
              <HiShieldCheck className="text-green-600 text-xl" />
            </div>
            <h4 className="font-semibold mb-2">Premium Quality</h4>
            <p className="text-sm text-gray-600">
              Hand-nurtured in our eco-greenhouses.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-green-200 p-4 rounded-full mb-4">
              <HiShieldCheck className="text-green-600 text-xl" />
            </div>
            <h4 className="font-semibold mb-2">Easy Care</h4>
            <p className="text-sm text-gray-600">
              Low maintenance plants for busy lives.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-green-200 p-4 rounded-full mb-4">
              <HiShieldCheck className="text-green-600 text-xl" />
            </div>
            <h4 className="font-semibold mb-2">Versatile</h4>
            <p className="text-sm text-gray-600">
              Selections for every corner of your home.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-green-200 p-4 rounded-full mb-4">
              <HiShieldCheck className="text-green-600 text-xl" />
            </div>
            <h4 className="font-semibold mb-2">Safe Shipping</h4>
            <p className="text-sm text-gray-600">
              Guaranteed arrival in perfect condition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
