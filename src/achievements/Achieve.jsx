import React from 'react';

const Achieve = ({ achievements }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10 p-4">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-5 m-7 hover:scale-105 transition-transform duration-200 ease-in-out max-w-sm"
        >
          {/* Image */}
          <div className="flex justify-center overflow-hidden rounded-t-lg border-2 border-gray-300">
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Other Info like name, links, etc */}
          <div className="p-4 text-center">
            <h1 className="text-xl font-bold mb-3">{achievement.title}</h1>
            <a
              href={achievement.link}
              className="text-blue-600 text-l font-semibold hover:text-blue-800 hover:underline"
              target='_blank'
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achieve;
