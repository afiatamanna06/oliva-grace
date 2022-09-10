import Head from 'next/head'
import About from '../components/about/About'
import Testimonial from '../components/testimonial/Testimonial'
import Work from '../components/work/Work'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <Work />
      <Testimonial />
    </div>
  )
}
