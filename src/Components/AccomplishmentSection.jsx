import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function AccomplishmentsPage() {
    const [accomplishments, setAccomplishments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAccomplishments = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/accomplishments`);
                setAccomplishments(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching accomplishments');
                setLoading(false);
            }
        };

        fetchAccomplishments();
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-10">
                <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16 mx-auto"></div>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-10 text-red-500">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="space-y-8">
                {accomplishments.map((accomplishment) => (
                    <div
                        key={accomplishment._id}
                        className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden p-4 sm:p-6"
                    >
                        <img
                            src={accomplishment.imageUrl || 'https://via.placeholder.com/400'}
                            alt={accomplishment.title}
                            className="w-full sm:w-48 h-48 object-cover rounded-md"
                        />
                        <div className="mt-4 sm:mt-0 sm:ml-6 flex-1 text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{accomplishment.title}</h3>
                            <div
                                className="text-gray-600 mt-2"
                                dangerouslySetInnerHTML={{
                                    __html: accomplishment.description,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AccomplishmentsPage;
