
import React from 'react';
import { Woman } from '../types';

interface WomanCardProps {
  woman: Woman;
}

const WomanCard: React.FC<WomanCardProps> = ({ woman }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col">
      <img className="w-full h-56 object-cover" src={woman.imageUrl} alt={`صورة لـ ${woman.name}`} />
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-teal-800 mb-2">{woman.name}</h2>
        <p className="text-gray-700 text-base leading-relaxed flex-grow">{woman.description}</p>
      </div>
    </div>
  );
};

export default WomanCard;
