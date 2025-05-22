import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../home/Head';

export default function Project() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const CMS_URL = 'https://api.contentaura.xyz/api/2/40';
    const API_KEY = 'bd313d20-d844-4b54-b606-b51ae7eefd54';

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
                setError('Failed to fetch project details');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div className="p-5 text-center">Loading...</div>;
    }

    if (error) {
        return <div className="p-5 text-red-500">{error}</div>;
    }

    return (
        <div className="flex flex-wrap justify-center">
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-md p-5 m-5 max-w-sm">
                        {/* Image */}
                        <div className="flex justify-center overflow-hidden rounded-t-lg border-2 border-gray-200">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                        </div>

                        {/* Info */}
                        <div className="p-4">
                            <h1 className="text-center font-bold text-xl mb-2">{item.title}</h1>
                            <p className="text-gray-600 mb-3">{item.about}</p>

                            {/* Tech stack */}
                            {Array.isArray(item.tech) && item.tech.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tech.map((techItem, i) => (
                                        <span key={i} className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full">
                                            {techItem}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Link Button */}
                            <div className='flex gap-4'>
                                {item.link && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block border-2 border-green-700 text-green-700 font-semibold px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white
                                        transition-all"
                                    >
                                        Live
                                    </a>
                                )}
                                {item.git_link && (
                                    <a
                                        href={item.git_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
                                    >
                                        Github
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500 mt-5">No projects found.</p>
            )}
        </div>
    );
}
