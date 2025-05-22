import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Achieve = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const CMS_URL = import.meta.env.VITE_CMS_URL_ACHIVE;
  const API_KEY = import.meta.env.VITE_API_KEY_ACHIVE;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(CMS_URL, {
          headers: {
            'X-API-Key': API_KEY
          }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch achievements');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center p-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-5">{error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-10 p-4">
      {data.length > 0 ? (
        data.map((achievement, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 m-7 max-w-sm"
          >
            {/* Image */}
            <div className="flex justify-center overflow-hidden rounded-t-lg border-2 border-gray-300">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-4 text-center">
              <h1 className="text-xl font-bold mb-3">{achievement.title}</h1>
              {achievement.link && (
                <a
                  href={achievement.link}
                  className="inline-block bg-green-600 text-white font-semibold px-4 py-2 mt-2 rounded-lg hover:bg-green-700 hover:rounded-full hover:transition-all hover:ease-in hover:duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No achievements found.</p>
      )}
    </div>
  );
};

export default Achieve;
