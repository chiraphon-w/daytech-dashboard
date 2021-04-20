import React from 'react'
import Head from 'next/head'
import WidgetTools from '../components/WidgetTools'
// import Widgets from '../components/Widgets'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Widgets - Daytech Dashboard</title>
      </Head>
      <h2 className="text-xl undefined">Widgets</h2>
      <div className="pt-3">
        <div className="mb-4">
          <WidgetTools />

        </div>
      </div>
    </div>
  )
}
