import Head from 'next/head'
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap'
import NavbarComponent from '../../components/navbar'
import Footer from '../../components/footer'
import { FadeUpRef } from '../../components/scroll-fade-ref'
import BackToTopButton from '../../components/back-to-top-button'

export default () => {
  return (
    <>
      <Head>
        <title>Next.js × GitHub Pages - OJII3</title>
        <meta name="description"
          content="Next.jsとGitHub Pagesで公開しているWebsiteの紹介です。react-bootstrapやGitHb Actionsも用いています。"
        />
        <link rel="icon" href="/selfmade-icon.jpg" />
      </Head>
      <NavbarComponent />

      <main>
        <Container fluid className='justify-content-center'>
          <Row className='p-5' ref={new FadeUpRef().ref}>
            <Col className='text-center'>
              <h1>
                <Image height={50} src='/Nextjs.svg' /><div> × </div><Image height={55} src='/GitHubPages.svg' />
              </h1>
              <b className='text-secondary'>ウェブサイト</b>

            </Col>
          </Row>

          <Row className='p-5' ref={new FadeUpRef().ref}>
            <Col className='text-center'>
              <p>
                See code in{' '}
                <a href='https://github.com/ojii3/ojii3.github.io'>GitHub</a>
              </p>
            </Col>
          </Row>

          <Row className='p-5' ref={new FadeUpRef().ref}>
            <Col className='text-center'>
              <h2 className='text-danger'>This Website is Exactly the Work!</h2>
            </Col>
          </Row>

          <Row className='justify-content-center p-5' ref={new FadeUpRef().ref}>
            <Col md={3}>
              <h2 className='text-center'>Feature</h2>
              <ListGroup variant='flush'>
                <ListGroup.Item><li>Static HTML</li></ListGroup.Item>
                <ListGroup.Item><li>Fast Rendering</li></ListGroup.Item>
                <ListGroup.Item><li>Responsive Layout</li></ListGroup.Item>
                <ListGroup.Item><li>CSS Animation</li></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row className='justify-content-center p-5' ref={new FadeUpRef().ref}>
            <Col md={3}>
              <h2 className='text-center'>What I used</h2>
              <ListGroup variant='flush'>
                <ListGroup.Item><li>Node.js v16</li></ListGroup.Item>
                <ListGroup.Item><li>TypeScript v4.8.4</li></ListGroup.Item>
                <ListGroup.Item><li>Next.js v13 (React v18)</li></ListGroup.Item>
                <ListGroup.Item><li>react-bootstrap v2.5.0 (Bootstrap 5)</li></ListGroup.Item>
                <ListGroup.Item><li>GitHub Pages</li></ListGroup.Item>
                <ListGroup.Item><li>GitHub Action</li></ListGroup.Item>
                <ListGroup.Item><li>Google Analytics 4</li></ListGroup.Item>
                <ListGroup.Item><li>Google Tag Manager</li></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <Row className='justify-content-center p-5' ref={new FadeUpRef().ref}>
            <Col md={6}>
              <h2 className='text-center'>Brief</h2>
              <p className='brief'>
                Next.jsで作成したものを静的サイトとしてエクスポートすることで、GitHub Pagesに公開しています。
                また、GitHub Actionsを用いて、エクスポートから公開までの流れを自動化しています。
                BootstrapのGrid Systemにより、様々な画面サイズに対応できるほか、
                React Hook を用いることで、ユーザーの操作に応じてアニメーションを表示しています。
              </p>
            </Col>
          </Row>

        </Container>
      </main>

      <Footer />
      <BackToTopButton />
    </>
  )
}