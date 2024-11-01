// layout.tsx
import React from 'react';

export default function SignInLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-200 p-4">
            {children}
        </div>
    );
}
