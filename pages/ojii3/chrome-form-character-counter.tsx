import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import NavbarComponent from '../../components/navbar'
import Footer from '../../components/footer'
import { FadeUpRef } from '../../components/scroll-fade-ref'
import BackToTopButton from '../../components/back-to-top-button'

export default () => {
  return (
    <>
      <Head>
        <title>Form Character Counter - OJII3</title>
        <meta lang='ja' />
        <meta name="description"
          content="Google Forms で入力文字数をリアルタイムに表示してくれるChrome拡張です"
        />
        <link rel="icon" href="/selfmade-icon.jpg" />
      </Head>
      <NavbarComponent />

      <main>
        <Container fluid className='justify-content-center'>
          <Row className='p-5' ref={new FadeUpRef().ref}>
            <h1 className='text-center'>
              Form Character Counter
            </h1>
            <h4 className='text-center text-info'>Chrome Extension</h4>
          </Row>

          <Row className='p-5' ref={new FadeUpRef().ref}>
            <Col className='text-center'>
              <p>
                See code in{' '}
                <a target='_brank' href='https://github.com/ojii3/chrome-form-character-counter'>GitHub</a>
              </p>
            </Col>
          </Row>

          <Row className='justify-content-md-center p-5' ref={new FadeUpRef().ref}>
            <Col sm={3}>
              <h2 className='text-center'>Feature</h2>
              <ListGroup variant='flush'>
                <ListGroup.Item><li>Realtime Display</li></ListGroup.Item>
                <ListGroup.Item><li>Simple</li></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <Row className='justify-content-md-center p-5' ref={new FadeUpRef().ref}>
            <Col sm={3}>
              <h2 className='text-center'>Brief</h2>
              <p className='brief'>
                Google Forms で回答中、入力文字数をリアルタイムで表示するだけの、シンプルながら役立つ拡張です。
                使い方は上記GitHubのリンクから参照してください。
              </p>
            </Col>
          </Row>

          <Row className='justify-content-md-center p-5' ref={new FadeUpRef().ref}>
            <Col sm={3}>
              <h2 className='text-center'>Article</h2>
              <p className='brief'>
                これに関して、Qiitaに記事を投稿しています。
                <Link href='https://qiita.com/OJII3/items/9a536295abaec4c5f47b'>Open →</Link>
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