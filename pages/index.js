import Head from 'next/head'
import Converter from '../components/converter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Roman Numbers Converter</title>
      </Head>
      <Converter />
    </>
  )
}
