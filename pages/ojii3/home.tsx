import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap'

import NavbarComponent from '../../components/navbar'
import Footer from '../../components/footer'
import { FadeUpRef, FadeRightRef, FadeLeftRef } from '../../components/scroll-fade-ref'
import BackToTopButton from '../../components/back-to-top-button'

export default () => {
  const cardColgrid = 3
  const cardColPadding = 'p-3'
  return (
    <>
      <Head>
        <title>Home - OJII3</title>
        <meta lang='ja' />
        <meta name="description"
          content="OJII3のホームページです。制作物などを掲載。"
        />
        <link rel="icon" href="/selfmade-icon.jpg" />
      </Head>
      <NavbarComponent />

      <main>
        <Container fluid className='justify-content-center'>
          <Row className='p-5' ref={new FadeUpRef().ref}>
            <h1 className='text-center'>
              Welcome to OJII3's Home!
            </h1>
          </Row>
          <Row ref={new FadeUpRef().ref}>
            <Col className='text-center'>
              {/*
              <Image alt='' width={130} height={136}
                style={{ borderRadius: '50%' }}
                src='https://avatars.githubusercontent.com/u/84656786?v=4' />
  */}
            </Col>
          </Row>

          <Row className='p-5' ref={new FadeUpRef().ref}>
            <Col>
              <p className='text-center'>
                See more about this website →{' '}
                <Link href='/ojii3/nextjs-gh-pages'>Next.js × GitHub Pages</Link>
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row className='justify-content-center pt-5 px-5' ref={new FadeUpRef().ref}>
            <Col md={6} className='text-center'>
              <h2>What do I do</h2>
            </Col>
          </Row>
          <Row className='justify-content-center p-5' ref={new FadeUpRef().ref}>
            <Col md={6} className='text-center'>
              <p className='brief text-center'>趣味でNode.jsや、Unityを使う。最近TypeScriptとPythonに手を出したもよう。</p>
            </Col>
          </Row>

          <Row className='text-center justify-content-center pt-5 px-5' ref={new FadeUpRef().ref}>
            <Col md={4}>
              <h2>GitHub Stats</h2>
            </Col>
          </Row>
          <Row className='text-center justify-content-center pt-5 px-5' ref={new FadeUpRef().ref}>
            <Col md={4}>
              <Image fluid width={'100%'} alt='Image of my preferred language' src="https://github-readme-stats.vercel.app/api/top-langs/?username=OJII3&layout=compact&count_private=true" />
            </Col>
          </Row>
          <Row className='text-center justify-content-center py-5 px-5' ref={new FadeUpRef().ref}>
            <Col md={4}>
              <Image fluid width={'100%'} alt='' src='https://github-readme-stats.vercel.app/api?username=OJII3&count_private=true' />
            </Col>
          </Row>
          <Row className='text-center justify-content-center py-2 px-5' ref={new FadeUpRef().ref}>
            <Col md={6}>
              <p>I can use these displays thanks to{' '}
                <a href='https://github.com/anuraghazra/github-readme-stats#github-stats-card'>github-readme-stats.vercel.app</a>
              </p>
            </Col>
          </Row>


          <Row className='text-center p-5' ref={new FadeUpRef().ref}>
            <Col>
              <h2>Works</h2>
            </Col>
          </Row>

          <Row className='justify-content-md-center p-2' style={{ overflowX: 'hidden' }}>
            <Col className={cardColPadding} ref={new FadeLeftRef().ref} lg={cardColgrid}>
              <Card as='a' href='/ojii3/nextjs-gh-pages' className='text-decoration-none text-reset card-link'>
                <Card.Body>
                  <Card.Title>Next.js × GitHub Pages</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Website</Card.Subtitle>
                  <Card.Text>
                    React(Next.js)で作成したホームページです。2022.11
                  </Card.Text>
                  <Card.Link as={Button} variant='outline-info'>See Details</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col className={cardColPadding} ref={new FadeRightRef().ref} lg={cardColgrid}>
              <Card as='a' href='/ojii3/tetris' className='text-decoration-none text-reset card-link'>
                <Card.Body>
                  <Card.Title>Tetris</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Website</Card.Subtitle>
                  <Card.Text>
                    JavaScriptでフルスクラッチしたテトリス風ブラウザゲームです。
                  </Card.Text>
                  <Card.Link as={Button} variant='outline-info'>See Details</Card.Link>
                </Card.Body>
              </Card>
            </Col>

          </Row>
          <Row className='justify-content-md-center p-2' style={{ overflowX: 'hidden' }}>
            <Col className={cardColPadding} ref={new FadeLeftRef().ref} lg={cardColgrid}>
              <Card as='a' href='/ojii3/chrome-form-character-counter' className='text-decoration-none text-reset card-link'>
                <Card.Body>
                  <Card.Title>Form Character Counter</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Chrome Extensions</Card.Subtitle>
                  <Card.Text>
                    Google Formsで、入力文字数を表示するChrome拡張です。2022.5
                  </Card.Text>
                  <Card.Link as={Button} variant='outline-info'>Details →</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col className={cardColPadding} ref={new FadeRightRef().ref} lg={cardColgrid}>
              <Card as='a' href='/ojii3/ichimon-itto-bot' className='text-decoration-none text-reset card-link'>
                <Card.Body>
                  <Card.Title>一問一答bot</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">LINE bot</Card.Subtitle>
                  <Card.Text>
                    英単語等暗記のための LINE bot です。
                  </Card.Text>
                  <Card.Link as={Button} variant='outline-info'>Details →</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </main>


      <Footer />
      <BackToTopButton />
    </>
  )
}