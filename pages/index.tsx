import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Image from 'next/image';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  const [interests, setInterests] = useState(['Baking', 'Frontend Programming', 'Web Design']);

  const reorderInterests = () => {
    setInterests([...interests].reverse());
  };

  return (
    <div className="container mx-auto p-4" style={{ backgroundColor: '#E6F2FF' }}> {/* Apply style here */}
      <div className="text-center">
        <Link href="/ThingsToRead" className="text-blue-500 hover:underline">Things to Read</Link>
      </div>
      <div className="text-center">
        <Link href="/PortfolioPage" className="text-blue-500 hover:underline">My Portfolio </Link>
      </div>
      <h1 className="text-4xl font-bold text-center my-6">Hi, Welcome to Ayesha&apos;s Website!</h1>

      <section className="my-8 text-center">
        <p>I am a senior Computer Science student with a passion for frontend programming and creating websites.</p>
        {/* Image component */}
        <Image
          src="/baking.jpg"
          alt="Ayesha"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold text-center">Things That Interest Me</h2>
        <ul className="list-disc list-inside my-4">
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        {/* Button to reorder list */}
        <div className="text-center">
          <button
            onClick={reorderInterests}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Reorder List
          </button>
        </div>
      </section>
      {/* Link to "Things to Read" page */}
    </div>
  );
};

export default HomePage;
