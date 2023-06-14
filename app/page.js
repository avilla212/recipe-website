import Head from 'next/head'
import About from './components/About'
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Recipe's :D</title>
        <meta name="description" content="Tiktok recipes" />
      </Head>
      <Navbar />
      <About />
      <Recipe />
    </div>
  )
}
