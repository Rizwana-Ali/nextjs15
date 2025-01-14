import Image from 'next/image';

import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Next.js 15 Article</title>
      </Head>

      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold ">Next.js 15 Insights</h1>
        </div>
      </header>

      {/* Banner */}
      <div className="w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/nextjs.png')" }}>
        <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <h2 className="text-white text-3xl font-bold">Welcome to Next.js 15</h2>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto p-4 flex-1">
        <article className="max-w-prose mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Introduction to Next.js 15</h2>
          <p className="mb-4">
            Next.js 15 is the latest iteration of the popular React framework, known for its flexibility and performance.
            With features like app directory enhancements, server components, and improved development tools, this version
            focuses on providing developers with a smoother and more scalable experience.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2">Enhanced Performance</h3>
          <p className="mb-4">
            One of the key highlights of Next.js 15 is its enhanced performance capabilities. By leveraging advanced
            optimization techniques, the framework ensures faster server rendering and reduced latency for web applications.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2">Developer Experience Improvements</h3>
          <p className="mb-4">
            With a focus on developer productivity, Next.js 15 introduces a revamped development server, better error
            handling, and tools that streamline the debugging process. These improvements aim to reduce development time
            significantly.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2">Future-Proof Features</h3>
          <p className="mb-4">
            Next.js 15 embraces future web standards, ensuring compatibility with modern technologies like React Server
            Components and more. This makes it an ideal choice for developers looking to stay ahead in the rapidly
            evolving tech landscape.
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Next.js 15 Insights. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
