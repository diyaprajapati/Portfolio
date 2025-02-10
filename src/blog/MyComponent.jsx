import React from 'react';

export default function MyComponent({ text }) {
    if (!text) return null;

    return (
        <div>
            {text.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                    {paragraph}
                </p>
            ))}
        </div>
    );
}