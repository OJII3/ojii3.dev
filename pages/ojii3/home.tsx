import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from 'styles/Home.module.css'

import NavbarComponent from '../../components/navbar'

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
        <Container fluid className='fadeUp'>
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

          <Row>

          </Row>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
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