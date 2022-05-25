import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'

import steph from '../img/steph.jpg'

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ScrollAnimation
            animateIn='animate__fadeInRight'
            duration={0.5}
            delay={600}
            animateOnce
          >
            <Card>
              <Row>
                <Col lg={{ span: 6 }}>
                  <Card.Img src={steph} />
                </Col>

                <Col lg={{ span: 6 }}>
                  <Card.Body>
                    <h2>Stephen Ustić</h2>

                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      <br />
                      sed do eiusmod tempor incididunt
                      <br />
                      ut labore et dolore magna aliqua
                    </Card.Text>

                    <Button className='d-block m-auto' size='lg'>
                      Contactez-moi !
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  )
}

export default About
