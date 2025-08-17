"use client"
import React from 'react';
import Link from 'next/link';

// You can replace these with your actual icons, e.g., from lucide-react
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="-2 -2 28 28" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-[92vh] flex flex-col justify-center">
      {/* The Navbar would be fixed above this, so we add padding to prevent overlap */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-24 md:py-32">
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 animate-fade-in-down">
              Conversations That Matter.
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 animate-fade-in-up">
              Welcome to Baate, a modern platform for meaningful discussions and real-time connections. Dive into forums, start a chat, and share your perspective.
            </p>

            {/* Call-to-action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
              <Link
                href="/forum"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-white rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 ease-in-out"
              >
                Explore Forums
                <ArrowRightIcon />
              </Link>
              <Link
                href="/chat"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-emerald-600 rounded-lg hover:bg-gray-800 hover:border-emerald-800 transition-all duration-300 ease-in-out"
              >
                Join Chat
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Adding some simple CSS for animations in a style tag for self-containment */}
      <style jsx={"true"}>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-fade-in {
            animation: fade-in 1s ease-out 0.8s forwards;
            opacity: 0;
        }
      `}</style>
    </div>
  );
}
