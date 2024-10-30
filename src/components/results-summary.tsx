"use client";

import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Image from "next/image";
import data from "../data/data.json"; // Adjust path as necessary

// Define a color map for each category
const categoryColors: Record<string, string> = {
  Reaction: "bg-red-50 text-red-400",
  Memory: "bg-yellow-50 text-yellow-400",
  Verbal: "bg-emerald-50 text-emerald-400",
  Visual: "bg-indigo-50 text-indigo-400",
};

// Calculate the average score
const calculateAverageScore = () => {
  const totalScore = data.reduce((acc, item) => acc + item.score, 0);
  return Math.round(totalScore / data.length); // Round to nearest whole number
};

export default function Home() {
  const averageScore = calculateAverageScore();
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-[736px] p-0 overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Results Section */}
          <div className="bg-[#6440FC] text-white p-8 md:p-10 rounded-b-[32px] md:rounded-[32px] text-center md:w-1/2 flex flex-col items-center gap-6">
            <h1 className="text-lg md:text-xl opacity-80">Your Result</h1>
            <div className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full bg-gradient-to-b from-[#4E21CA]/40 to-[#4E21CA]/0 flex flex-col items-center justify-center">
              <span className="text-5xl md:text-6xl font-bold">{averageScore}</span>
              <span className="text-xs md:text-sm opacity-50">of 100</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-bold">Great</h2>
              <p className="text-xs md:text-sm opacity-70 max-w-[260px]">
                You scored higher than 65% of the people who have taken these tests.
              </p>
            </div>
          </div>

          {/* Summary Section */}
          <div className="p-6 md:p-10 md:w-1/2">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-6">Summary</h2>

            <div className="space-y-4 mb-6">
              {data.map((item) => (
                <div
                  key={item.category}
                  className={`flex items-center justify-between p-4 rounded-xl ${categoryColors[item.category] || "bg-gray-100"}`}
                >
                  <div className="flex items-center gap-3">
                    <Image src={item.icon} alt={item.category} width={20} height={20} />
                    <span className={`text-sm font-medium ${categoryColors[item.category]?.split(" ")[1]}`}>
                      {item.category}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-800">
                    {item.score} <span className="opacity-50">/ 100</span>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full h-14 text-base rounded-full bg-slate-800 hover:bg-slate-700">
              Continue
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
