import React from 'react';

const Achieve = ({ achievements }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="max-w-xs bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
        >
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{achievement.title}</h2>
            <a
              href={achievement.link}
              className="block mt-4 text-blue-600 hover:text-blue-800"
              target="_blank"
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
