import React, { useState, useEffect } from 'react';
import Head from './home/Head';
import axios from 'axios';
import MyComponent from './blog/MyComponent';

export default function Blog() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const CMS_URL = 'http://localhost:8081/api/4/10';
    const API_KEY = 'b7fbd26b-2f01-4ca4-8641-d10dea149fe8';

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
                    <>
                        <div className='text-3xl font-bold underline text-orange-600'>
                            {data[0].Title}
                        </div>
                        <div className='text-lg font-medium'>
                            <MyComponent text={data[0].Data} />
                        </div>
                    </>
                ) : (
                    <div>No blog content available</div>
                )}
            </div>
        </div>
    );
}