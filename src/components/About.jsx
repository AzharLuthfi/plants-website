import React from "react";
import { BiLeaf } from "react-icons/bi";
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="flex flex-row items-center gap-4 max-w-5xl mx-auto px-6">
        <div className="flex-1">
          <h1 className="text-base font-bold text-teal-900 opacity-50 mb-4">
            OUR STORY
          </h1>
          <h1 className="text-3xl font-[1000] mb-7">
            Quality & Sustainability
          </h1>
          <p className="text-gray-600 mb-4">
            We focus on quality and sustainability, ensuring every plant we sell
            is nurtured to perfection in our eco-friendly greenhouses. Our
            mission is to bridge the gap between urban living and nature's
            tranquility.
          </p>
          <p className="text-gray-600 mb-7">
            Every leaf is inspected, every pot is hand-selected, and every
            delivery is carbon-neutral. We don't just sell plants; we cultivate
            lifestyles.
          </p>
          <div className="flex items-center gap-2">
            <BiLeaf className="text-green-500" />
            <span>100% Organic Growth Process</span>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="image about"
            className="w-full size-100 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
