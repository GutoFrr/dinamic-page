import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Header from '../components/header'

import kallarari from '../assets/images/header-images/kallarari.png'

const Home: React.FC = () => {
  const name = 'Minosso'

  return (
    <Container>
      <Head>
        <title>Dinamic Page</title>
      </Head>

      <Header username={name} profilePic={kallarari} />
    </Container>
  )
}

export default Home
