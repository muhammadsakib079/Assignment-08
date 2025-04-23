// src/pages/NotFound.jsx
import Navbar from '../components/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
        <Navbar></Navbar>
            <main className="grid min-h-full place-items-center bg-white px-6 py-68">
                <div className="text-center">

                    <p className="text-7xl font-semibold text-[var(--button-background)]">404</p>

                    <h1 className="mt-4 font-semibold tracking-tight text-balance text-gray-900 text-7xl">
                        Page not found
                    </h1>

                    <p className="mt-6 font-medium text-pretty text-gray-500 text-xl/8">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-md bg-[var(--button-background)] px-3.5 py-2.5 text-lg font-semibold text-white shadow-xs hover:bg-green-700 "
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default NotFound;
