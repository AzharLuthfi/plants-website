import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import sarah from "../assets/avatars/avatar2.jpg";
import michael from "../assets/avatars/avatar1.jpg";
import emma from "../assets/avatars/avatar3.jpg";

export default function Review() {
  return (
    <section className="bg-[#eef7ec] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-12">
          What Our Growers Say
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm relative">
            <HiOutlineChatBubbleLeft className="absolute top-6 right-6 text-green-300 text-2xl" />

            <p className="text-sm text-gray-600 italic mb-6 leading-relaxed">
              &quot;The Monstera I ordered arrived in perfect condition. It’s
              now the centerpiece of my living room!&quot;
            </p>

            <div className="flex items-center gap-3">
              <img
                src={sarah}
                alt="Sarah Jenkins"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">Sarah Jenkins</p>
                <p className="text-xs text-gray-500">HOME ENTHUSIAST</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm relative">
            <HiOutlineChatBubbleLeft className="absolute top-6 right-6 text-green-300 text-2xl" />

            <p className="text-sm text-gray-600 italic mb-6 leading-relaxed">
              &quot;Minimalist website and premium plants. The delivery was fast
              and the packaging was completely plastic-free.&quot;
            </p>

            <div className="flex items-center gap-3">
              <img
                src={michael}
                alt="Michael Thorne"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">Michael Thorne</p>
                <p className="text-xs text-gray-500">INTERIOR DESIGNER</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm relative">
            <HiOutlineChatBubbleLeft className="absolute top-6 right-6 text-green-300 text-2xl" />

            <p className="text-sm text-gray-600 italic mb-6 leading-relaxed">
              &quot;I’m a beginner and their care tips were so helpful. My Bird
              of Paradise is thriving beautifully!&quot;
            </p>

            <div className="flex items-center gap-3">
              <img
                src={emma}
                alt="Emma Rodriguez"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">Emma Rodriguez</p>
                <p className="text-xs text-gray-500">URBAN DWELLER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
