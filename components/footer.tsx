import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container fluid className="p-5">
        <Row className='p-5' style={{borderTop: 'solid 1px #ccc'}}>
          <Col className='text-center'>
            ©OJII3
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer