import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container fluid className="py-5">
        <Row className='py-5 mx-lg-5' style={{borderTop: 'solid 1px #ccc'}}>
          <Col className='text-center'>
            ©OJII3
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer