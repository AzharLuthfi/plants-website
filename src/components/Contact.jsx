import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-[#f6f8ef] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Let&apos;s Grow Together
            </h2>
            <p className="text-sm text-green-700 mb-8 max-w-md">
              Have questions about plant care or an upcoming order? We&apos;re
              here to help you cultivate your dream space.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <HiOutlineEnvelope className="text-green-500 text-lg" />
                <span>hello@plants.co</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HiOutlineMapPin className="text-green-500 text-lg" />
                <span>123 Botanical Ave, Portland, OR</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-500 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help?"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
