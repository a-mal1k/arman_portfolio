import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    return(
        <section className="relative py-20 bg-stone-100 dark:bg-slate-800">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="text-center">
                    <h1 className="block">Oops! you have entered an invalid URL</h1>
                    <h2 className="block">{err.status} - {err.statusText}</h2>
                    <Link className="text-lg mt-5 border border-slate-400 inline-block px-4 py-2 rounded-md" to="/">Back to Home</Link>
                </div>
            </div>
        </section>
    );
};
export default Error;