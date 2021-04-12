import React from 'react';
import Head from 'next/head'

export default function about() {
    return (
        <div className="w-full h-screen max-h-screen min-w-full bg-gray-200">
            <Head>
                <title>About - Daytech Dashboard</title>
            </Head>
            <body>
                <div id="__next" >
                    <div className="w-100 max-w-4xl mx-auto p-5">
                        <h1 className="text-4xl font-bold undefined">
                            Daytech Dashboard
                        </h1>
                        <div className="my-5">
                            <a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-blue-500 bg-gray-100" href="/">Widgets</a>
                            <a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500" href="/about">About</a>
                        </div>
                        <h2 className="text-2xl undefined">About</h2>
                        <div className="pt-3">
                            <div className="p-5  border-1 bg-white rounded-2xl">
                                <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                                {"I love <programming />"} 
                                </h2>
                                <p>Currently, we have only <strong>JustSay</strong>, <strong>Counter</strong> and <strong>Timer</strong> widgets.</p>
                                <p>Crafted with <span className="text-red-600">♥</span> by Apple.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}