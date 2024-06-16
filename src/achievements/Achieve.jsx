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
            <button className='bg-green-600 px-3 py-2 mt-5 ms-2 border-green-800 rounded-lg hover:rounded-3xl hover:transition-all hover:ease-in-out duration-300'> <a href={achievement.link}
              className="m-2 cursor-pointer text-white font-semibold"
              target='_blank'>
              View Certificate </a> </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achieve;
