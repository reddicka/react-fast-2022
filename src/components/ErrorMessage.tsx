import React from 'react';

interface ErrorMassegeProps {
    error: string;
}

export function ErrorMassege({ error }: ErrorMassegeProps) {
    return <p className="text-center text-red-600">{error}</p>;
}
