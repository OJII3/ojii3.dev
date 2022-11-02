import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { MutableRefObject, useRef, useEffect } from 'react'
import { Container, Row, Col, Fade } from 'react-bootstrap'
import styles from 'styles/Home.module.css'

import NavbarComponent from '../../components/navbar'
import { FadeUpRef, FadeRightRef } from '../../components/scroll-fade-ref'

export default () => {

  return (
    <div>
      <Head>
        <title>Home - OJII3</title>
        <meta name="description" content="Homepage of OJII3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponent />

      <main>
        <Container fluid className='fade-up'>
          <Row className='p-5'>
            <h1 className='text-center'>
              Welcome to OJII3's Home!
            </h1>
          </Row>
          <Row>
            <Col className='text-center'>
              <Image alt='' width={130} height={136}
                style={{ borderRadius: '50%' }}
                src='https://avatars.githubusercontent.com/u/84656786?v=4' />
            </Col>
          </Row>

          <Row className='p-5'>
            <Col>
              <p className='text-center'>
                See more about this website →{' '}
                <Link href='/ojii3/nextjs-gh-pages'>Next.js × GitHub Pages</Link>
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row className='text-center p-5' ref={new FadeUpRef().ref}>
            <Col>
              <h3>Who am I?</h3>
              <p>It' a secret! Sorry!</p>
            </Col>
          </Row>
          <Row className='text-center p-5' ref={new FadeUpRef().ref}>
            <Col>
              <h3>GitHub Stats</h3>
              <a href="https://github.com/anuraghazra/github-readme-stats">
                <img alt='' width='auto' src="https://github-readme-stats.vercel.app/api/top-langs/?username=OJII3&layout=compact" />
              </a>
              <p>
                I also use C# too.
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid>

          <Row className='justify-content-md-center'>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <Col>

                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </Col>
            </a>
            <a href="https://nextjs.org/learn" className={styles.card}>
              <Col>
                <h2>Learn &rarr;</h2>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </Col>
            </a>
          </Row>

          <Row className='justify-content-md-center'>
            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <Col>
                <h2>Examples &rarr;</h2>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </Col>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <Col>
                <h2>Deploy &rarr;</h2>
                <p>
                  Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
              </Col>
            </a>
          </Row>

        </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://ojii3.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}