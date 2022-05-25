import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
  Button,
} from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'

const About = () => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col lg='6'>
          <ScrollAnimation
            animateIn='animate__fadeInDown'
            duration={0.5}
            delay={200}
            animateOnce
          >
            <div className='section-title'>
              <h2>Contact</h2>

              <p className='lead'>
                Une question, une proposition, une envie particulière?
                <br />
                N'hésitez pas à nous contacter !
              </p>
            </div>
          </ScrollAnimation>
        </Col>
      </Row>

      <Row>
        <Col>
          <ScrollAnimation
            animateIn='animate__fadeInUp'
            duration={0.5}
            delay={400}
            animateOnce
          >
            <Card>
              <Card.Body>
                <Row>
                  <Col md='6'>
                    <Form.Group>
                      <FloatingLabel
                        controlId='floatingInput'
                        label='Nom'
                        className='mb-3'
                      >
                        <Form.Control type='text' placeholder='Doe' />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>

                  <Col md='6'>
                    <Form.Group>
                      <FloatingLabel
                        controlId='floatingInput'
                        label='Prénom'
                        className='mb-3'
                      >
                        <Form.Control type='email' placeholder='John' />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Adresse Email'
                    className='mb-3'
                  >
                    <Form.Control type='email' placeholder='name@example.com' />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group>
                  <FloatingLabel
                    controlId='floatingTextarea'
                    label='Votre message'
                    className='mb-4'
                  >
                    <Form.Control
                      as='textarea'
                      placeholder='Laisser votre message ici'
                      style={{ height: '200px' }}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Button className='d-block m-auto' size='lg'>
                  Envoyer
                </Button>
              </Card.Body>
            </Card>
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  )
}

export default About
