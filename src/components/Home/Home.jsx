import React from 'react';

export default function Home() {
    return (
        <> 
            {/* Full-width container for the first image */}
            <div className="relative w-full h-auto">
                <img className="w-full h-auto" src="https://nitsri.ac.in/upload/slider-1-2.jpg" alt="image1" />
            </div>

            {/* Centered content below the first image */}
            <div className="mx-auto w-full max-w-7xl px-4 py-8">
                <div className="grid place-items-center">
                    <h1 className="text-center text-2xl sm:text-5xl py-5 font-medium">Alumini</h1>
                    <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl mb-8"></div>
                    <img
                        className="sm:w-96 w-48"
                        src="https://th.bing.com/th/id/OIP.NJaQmxooPqLmoIE9VinGCwHaHa?rs=1&pid=ImgDetMain"
                        alt="image2"
                    />
                </div>
                
                <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Sonam Wangchuk</h1>
            </div>
        </>
    );
}
