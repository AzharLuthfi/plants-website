import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Card */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg min-h-105 flex items-center justify-center text-center"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative max-w-2xl px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bring Nature Into Your Space
            </h1>

            <p className="text-gray-200 mb-6">
              Curated ornamental plants delivered to your door. High-end indoor
              and outdoor plants for modern living environments.
            </p>

            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
              Explore Plants
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
