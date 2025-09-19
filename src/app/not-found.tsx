'use client'

import Link from 'next/link'


export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col">
       
            <div className="flex-grow flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="text-center px-4 py-16">
                    {/* 404 Text with Gradient */}
                    <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text animate-pulse">
                        404
                    </h1>

                    {/* Error Message */}
                    <h2 className="mt-4 text-3xl font-semibold text-gray-800">
                        Page Not Found
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-lg mx-auto">
                        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        Let&apos;s get you back on track.
                    </p>

                    {/* Decorative Element */}
                    

                    {/* Back to Home Button */}
                    <Link
                        href="/"
                        className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg 
              hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg
              transform hover:-translate-y-0.5"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
         
        </div>
    )
} 