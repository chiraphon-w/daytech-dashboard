import React from 'react'
import Head from 'next/head'
import JustSay from '../components/JustSay'
import Counter from '../components/Counter'
import Timer from '../components/Timer'
import Nav from '../components/Nav'

export default function Home() {
  
  return (
    <div className="w-full h-screen max-h-screen min-w-full bg-gray-200">
      <Head>
        <title>Widgets - Daytech Dashboard</title>
      </Head>
      <div className="w-100 max-w-4xl mx-auto p-5">
        <Nav />
        <h2 className="text-2xl undefined">Widgets</h2>
        <div className="pt-3">
          <div className="md:masonry">
            <JustSay />
            <Counter />
            <Timer />
          </div>
        </div>

      </div>
    </div>
  )
}
