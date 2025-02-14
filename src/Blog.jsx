import React, { useState, useEffect } from 'react';
import Head from './home/Head';
import axios from 'axios';
import MyComponent from './blog/MyComponent';

export default function Blog() {
    const [data, setData] = useState([]);
    const [test, setTest] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const CMS_URL = 'http://localhost:8081/api/4/10';
    const API_KEY = 'b7fbd26b-2f01-4ca4-8641-d10dea149fe8';

    const URL = 'http://localhost:8081/api/2/11';
    const API = 'f45e59de-78ef-40fd-a621-57a50184e200';

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

    useEffect(() => {
        const fetchTest = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get(URL, {
                    headers: {
                        'X-API-Key': API
                    }
                });
                setTest(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch test content');
            } finally {
                setLoading(false);
            }
        }
        fetchTest();
    }, [])

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
                {/* {data.length > 0 ? (
                    <>
                        <div className='text-3xl font-bold underline text-orange-600 self-center'>
                            {data[0].Title}
                        </div>
                        <div className='text-lg font-medium'>
                            <MyComponent text={data[0].Data} />
                        </div>
                    </>
                ) : (
                    <div>No blog content available</div>
                )} */}

                {data.length > 0 ? (
                    <div>
                        {data.map((item, index) => (
                            <div key={index} className='flex flex-col gap-2'>
                                <div className='text-3xl font-bold underline text-orange-600 self-center'>
                                    {item.Title}
                                </div>
                                <div className='text-lg font-medium'>
                                    <MyComponent text={item.Data} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No blog content available</div>
                )}
            </div>

            <div>
                {test.length > 0 ? (
                    <div>
                        {test.map((item, index) => (
                            <div key={index} className="mb-4 p-4 border-b border-gray-300">
                                <div className="font-bold">ID: {item.Id}</div>
                                <div>Boolean: {item.Bool ? 'True' : 'False'}</div>

                                {/* List Items */}
                                <ul className="list-disc list-inside">
                                    {item.Data?.map((dataItem, i) => (
                                        <li key={i}>{dataItem}</li>
                                    ))}
                                </ul>

                                {/* Image Display */}
                                {item.Image && (
                                    <div className="mt-2">
                                        <img src={item.Image} alt="Test" className="w-40 h-40 object-cover rounded-lg" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No test content available</div>
                )}
            </div>


        </div>
    );
}