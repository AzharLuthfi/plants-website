import { HiArrowRight } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-[#0f1c14] to-[#0b140f] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* TOP */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
          {/* BRAND */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="text-green-400 text-lg">✦</span>
              <h3 className="font-bold text-white tracking-wide">PLANTS</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Cultivating modern spaces with curated botanical excellence. We
              bring the nursery to your doorstep.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center md:text-left">
            <h4 className="text-green-400 font-semibold mb-4 text-sm tracking-widest">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Our Story", "Collection", "Contact Us"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="text-center md:text-left">
            <h4 className="text-green-400 font-semibold mb-4 text-sm tracking-widest">
              SUPPORT
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Shipping Policy",
                "Plant Care Guide",
                "Returns & Refunds",
                "FAQ",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="text-center md:text-left">
            <h4 className="text-green-400 font-semibold mb-4 text-sm tracking-widest">
              NEWSLETTER
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Join our green community for weekly care tips and arrivals.
            </p>

            <div className="flex max-w-sm mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Email"
                className="
                  w-full bg-[#1a261e] text-sm px-4 py-2
                  rounded-l-md focus:outline-none
                  placeholder-gray-500
                "
              />
              <button
                className="
                  bg-green-500 px-4 rounded-r-md
                  flex items-center justify-center
                  hover:bg-green-600 transition
                "
              >
                <HiArrowRight className="text-black text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-14 pt-6">
          <p className="text-xs text-center text-gray-500 tracking-wide">
            © 2024 PLANTS BOTANICAL STUDIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
