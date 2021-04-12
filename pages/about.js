import React from 'react'
// import PropTypes from 'prop-types'
import Head from 'next/head'
import Nav from '../components/Nav'



const about = () => {
    return (
        <div className="w-full h-screen max-h-screen min-w-full bg-gray-200">
            <Head>
                <title id="h_title">About - Daytech Dashboard</title>
            </Head>
            <div id="__next" >
                <div className="w-100 max-w-4xl mx-auto p-5">
                    <Nav />
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
        </div>
    )
};

export default about;