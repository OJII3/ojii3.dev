import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'

import NavbarComponent from '../../components/navbar'
import Footer from '../../components/footer'
import { FadeUpRef, FadeRightRef, FadeLeftRef } from '../../components/scroll-fade-ref'

export default () => {
  const cardColgrid = 3
  const cardColPadding = 'p-3'
  return (
    <>
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
              {/*
              <Image alt='' width={130} height={136}
                style={{ borderRadius: '50%' }}
                src='https://avatars.githubusercontent.com/u/84656786?v=4' />
  */}
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
              <h2>Who am I?</h2>
              <p>It's a secret!</p>
            </Col>
          </Row>
          <Row className='text-center p-5' ref={new FadeUpRef().ref}>
            <Col>
              <h2>GitHub Stats</h2>
              <a href="https://github.com/anuraghazra/github-readme-stats">
                <Image fluid alt='' src="https://github-readme-stats.vercel.app/api/top-langs/?username=OJII3&layout=compact" />
              </a>
              <p>
                I also use C# too. I'm not a front-end engineer after all!
              </p>
            </Col>
          </Row>
          <Row className='text-center p-5' ref={new FadeUpRef().ref}>
            <Col>
              <h2>Works</h2>
            </Col>
          </Row>

          <Row className='justify-content-md-center p-2'>
            <Col className={cardColPadding} ref={new FadeLeftRef().ref} lg={cardColgrid}>
              <Card>
                <Card.Body>
                  <Card.Title>Next.js × GitHub Pages</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Website</Card.Subtitle>
                  <Card.Text>
                    React(Next.js)で作成した最新なホームページです。2022.11
                  </Card.Text>
                  <Card.Link href="/ojii3/nextjs-gh-pages">Details →</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col className={cardColPadding} ref={new FadeRightRef().ref} lg={cardColgrid}>
              <Card>
                <Card.Body>
                  <Card.Title>Tetris</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Website</Card.Subtitle>
                  <Card.Text>
                    Javascriptでフルスクラッチしたブラウザゲームです。2021.5
                  </Card.Text>
                  <Card.Link href="ojii3/tetris">Details →</Card.Link>
                </Card.Body>
              </Card>
            </Col>

          </Row>
          <Row className='justify-content-md-center p-2'>
            <Col className={cardColPadding} ref={new FadeLeftRef().ref} lg={cardColgrid}>
              <Card>
                <Card.Body>
                  <Card.Title>Form Chara Counter</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Chrome Extensions</Card.Subtitle>
                  <Card.Text>
                    Google Formsで、文字数をリアルタイムに表示するChrome拡張です。2022.5
                  </Card.Text>
                  <Card.Link href="/ojii3/chrome-form-chara-counter">Details →</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col className={cardColPadding} ref={new FadeRightRef().ref} lg={cardColgrid}>
              <Card>
                <Card.Body>
                  <Card.Title>一問一答bot</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">LINE bot</Card.Subtitle>
                  <Card.Text>
                    暗記のための LINE bot です。
                  </Card.Text>
                  <Card.Link href="ojii3/tetris">Details →</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </main>

      <Footer />
    </>
  )
}