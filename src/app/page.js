import { Button } from "@/src/app/components/ui/button";
import React from "react";

export default function Home() {
  const data = [
    { img: "/man.gif", title: "Fund Yourself", desc: "Your fans are always ready to help." },
    { img: "/coin.gif", title: "Support Creators", desc: "Let supporters fuel your creative journey." },
    { img: "/avatar.gif", title: "Build Community", desc: "Brew connections one chai at a time." },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0f0f11] via-[#111112] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="flex items-center justify-center gap-3 text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8">
          <h2 className="flex items-center">
            Get Me a ChaYeah
            <span className="ml-3">
              <img src="/tea.gif" width={65} alt="chai gif" />
            </span>
          </h2>
        </div>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-400 leading-relaxed">
          ChaiYeah is the crowdfunding platform for your favorite chai creators.
          Empower creators and brew your chai dreams today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-md mx-auto justify-center">
          <Button variant="Purple" className="w-full sm:w-auto px-6 py-3 text-lg rounded-md">
            Sign Up
          </Button>
          <Button className="w-full sm:w-auto px-6 py-3 text-lg rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition duration-300">
            Read Docs
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Your Fans Can Get You a Chai
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 transition duration-300 hover:scale-105 hover:shadow-lg shadow-black/20"
            >
              <img
                src={item.img}
                width={80}
                alt={item.title}
                className="bg-white/10 p-3 rounded-full"
              />
              <p className="text-xl font-semibold text-white">{item.title}</p>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
