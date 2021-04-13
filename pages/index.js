import React from 'react'
import Head from 'next/head'
import Widgets from '../components/Widgets'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Widgets - Daytech Dashboard</title>
      </Head>
      <Widgets />
    </div>
  )
}
