import Head from 'next/head'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import NavbarComponent from '../../components/navbar'
import Footer from '../../components/footer'
import { FadeUpRef } from '../../components/scroll-fade-ref'
import Link from 'next/link'
import BackToTopButton from '../../components/back-to-top-button'

export default () => {
  return (
    <>
      <Head>
        <title>Tetris - OJII3</title>
        <meta name="description"
          content="ゲームエンジンを用いず、JavaScriptでフルスクラッチしたゲームです。"
        />
        <link rel="icon" href="/selfmade-icon.jpg" />
      </Head>
      <NavbarComponent />

      <main>
        <Container fluid className='justify-content-center'>
          <Row className='py-5' ref={new FadeUpRef().ref}>
            <Col className='text-center'>
              <h1>
                Tetris-ish Browser Game
              </h1>
              <b className='text-secondary'>
                テトリス風ブラウザゲーム
              </b>
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

          <Row className='justify-content-center p-5' ref={new FadeUpRef().ref}>
            <Col md={3}>
              <h2 className='text-center'>Feature</h2>
              <ListGroup variant='flush'>
                <ListGroup.Item><li>Created without any game engine</li></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <Row className='justify-content-center p-5' ref={new FadeUpRef().ref}>
            <Col md={3}>
              <h2 className='text-center'>What I used</h2>
              <ListGroup variant='flush'>
                <ListGroup.Item><li>Google Apps Script</li></ListGroup.Item>
                <ListGroup.Item><li>Canvas API (HTML5)</li></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <Row className='justify-content-center p-5' ref={new FadeUpRef().ref}>
            <Col md={6}>
              <h2 className='text-center'>Brief</h2>
              <p className='brief'>
                <Link href='https://developer.mozilla.org/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript'>
                  MDNの2D Breakoutのチュートリアル
                </Link>
                を応用して作成した、テトリス風ブラウザゲームです。
                ゲームを作るなら素直にゲームエンジンを使いましょう。
              </p>
            </Col>
          </Row>

          <Row className='justify-content-md-center p-5' ref={new FadeUpRef().ref}>
            <Col md={6}>
              <h2 className='text-center'>Live Site</h2>
              <p className='text-center brief py-3'>
                <Button variant='primary' href='https://script.google.com/macros/s/AKfycbwhYmfDdeKwVQSjXGXyv58aRqDb7WpN-xyeWXWNZdjd3vBsRn5F6ZgzpMgew1X140Qy7g/exec'>
                  Play
                </Button>
              </p>
              <p className='text-danger brief'>
                ※画面の入力座標を変換し忘れているため、画面の横幅が広いと正しく動作しません。
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