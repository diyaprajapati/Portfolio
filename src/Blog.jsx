import React, { useState, useEffect } from 'react';
import Head from './home/Head';
import axios from 'axios';
import MyComponent from './blog/MyComponent';

export default function Blog() {
    const [data, setData] = useState([]);
    const [test, setTest] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const CMS_URL = 'https://api.contentaura.xyz/api/2/1';
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
                setError('Failed to fetch blog content');
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
        <div>
            <Head />
            <div className='flex flex-col gap-5 p-5'>
                {data.length > 0 ? (
                    <div>
                        {data.map((item, index) => (
                            <div key={index} className='flex flex-col gap-2'>
                                <div className='text-3xl font-bold underline text-orange-600 self-center'>
                                    {item.Title}
                                </div>
                                <div className='text-lg font-medium'>
                                    <MyComponent text={item.description} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No blog content available</div>
                )}
            </div>

        </div>
    );
}