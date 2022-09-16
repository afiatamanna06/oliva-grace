import Head from 'next/head'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Services from '../components/services/Services'
import Testimonial from '../components/testimonial/Testimonial'
import Work from '../components/work/Work'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oliva Grace</title>
        <meta name="description" content="Oliva Grace portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <Services />
      <Work />
      <Testimonial />
      <Contact />
    </div>
  )
}
