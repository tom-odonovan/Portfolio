import Head from 'next/head'
import Navbar from '../components/util/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tom O'Donovan | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>
        <h1>Welcome to My Portfolio!</h1>
      </div>
    </>
  )
}
