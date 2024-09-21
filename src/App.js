import React, { useState } from 'react';
import { BookmarkIcon, SearchIcon, LayoutListIcon, ShieldIcon, BookOpenIcon, LightbulbIcon, CodeIcon, UsersIcon } from "lucide-react";

const App = () => {
  const [activeTab, setActiveTab] = useState('hosting');

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Centered Header Section */}
      <header className="flex-grow flex flex-col justify-center items-center pt-6 pb-4 text-center px-4">
        <h1 className="md:leading-[1.5] text-2xl md:text-8xl font-bold mb-2 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Welcome to Ledge Browser
        </h1>
        <p className="text-base md:text-lg mb-2 font-bold text-gray-600">Powered by technicallyweb3</p>
        <p className="text-sm md:text-base mb-4 text-gray-700">Your gateway to the decentralized web. Experience next-generation Web3 browsing with decentralized hosting and seamless user interactions.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105">
          Explore Now
        </button>
      </header>

      {/* Content Section */}
      <main className="bg-gray-100 py-6 md:py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-6">
            {['hosting', 'integration', 'security', 'developer', 'community'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-full text-xs md:text-sm ${
                  activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === 'hosting' && (
            <FeatureCard
              title="Decentralized Web Hosting"
              icon={<LayoutListIcon className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />}
              description="Deploy your website directly onto the blockchain. Upload HTML, CSS, and JavaScript files to smart contracts for truly decentralized hosting. Ledge Browser fetches and renders these files seamlessly when you enter the associated contract address."
            />
          )}
          
          {activeTab === 'integration' && (
            <FeatureCard
              title="Seamless Web3 Integration"
              icon={<LightbulbIcon className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />}
              description="Experience seamless integration with various Web3 wallets and decentralized applications (DApps). Interact with smart contracts and blockchain networks directly from your browser."
            />
          )}
          
          {activeTab === 'security' && (
            <FeatureCard
              title="Enhanced Privacy and Security"
              icon={<ShieldIcon className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />}
              description="Protect your data and assets with Ledge Browser's advanced security features. Enjoy private, encrypted browsing without compromising on functionality."
            />
          )}
          
          {activeTab === 'developer' && (
            <FeatureCard
              title="Powerful Developer Tools"
              icon={<CodeIcon className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />}
              description="Access a suite of developer tools designed for Web3 and blockchain development. Debug, explore, and create with ease."
            />
          )}
          
          {activeTab === 'community' && (
            <FeatureCard
              title="Join Our Community"
              icon={<UsersIcon className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />}
              description="Become part of the Ledge Browser ecosystem. Contribute, learn, and grow with fellow Web3 enthusiasts and developers."
            />
          )}
        </div>
      </main>

      <footer className="text-center py-4 md:py-6 text-gray-600">
        <button className="text-blue-500 hover:text-blue-600 text-sm md:text-base">Get Involved</button>
        <p className="mt-2 text-xs md:text-sm">Join the decentralized revolution with Ledge Browser</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, icon, description }) => (
  <div className="p-3 md:p-4 bg-white shadow-md hover:shadow-lg rounded-xl transition-shadow duration-300">
    <div className="flex items-center mb-2 md:mb-3">
      {icon}
      <h3 className="text-lg md:text-xl font-semibold ml-2 text-gray-800">{title}</h3>
    </div>
    <p className="text-xs md:text-sm text-gray-600">{description}</p>
  </div>
);

export default App;
