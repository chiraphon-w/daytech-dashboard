import React from 'react';
import Head from 'next/head'

const MainLayout = ({ children }) => {
    return (
        <div className="main-container">
            <div className="w-full h-screen max-h-screen min-w-full bg-gray-200">
                <Head>
                    <title>Widgets - Daytech Dashboard</title>
                </Head>

                <div className="w-100 max-w-4xl mx-auto p-5">
                    <h1 className="text-4xl font-bold undefined">Daytech Dashboard</h1>
                    <div className="my-5">
                        <a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500" href="/">Widgets</a>
                        <a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-blue-500 bg-gray-100" href="/about">About</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLayout;