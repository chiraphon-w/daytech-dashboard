import React from 'react'
import Head from 'next/head'
import Card from '../components/Layouts/Card'

const about = () => {
    return (
        <div>
            <Head>
                <title>About - Daytech Dashboard</title>
            </Head>
            <h2 className="text-2xl">About</h2>
            <div className="pt-3">
                    <Card title="I love <programming />">
                        <p>Currently, we have only <strong>JustSay</strong>, <strong>Counter</strong> and <strong>Timer</strong> widgets.</p>
                        <p>Crafted with <span className="text-red-600">♥</span> by Apple.</p>
                    </Card>
                </div>
            </div>
    )
};

export default about;