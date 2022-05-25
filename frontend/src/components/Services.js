import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'

import shoe from '../img/shoe.jpg'
import sneakers from '../img/sneakers.jpg'
import keys from '../img/keys.jpg'
import services from '../img/services.jpg'

const Services = () => {
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
              <h2>Nos Services</h2>

              <p className='lead'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </ScrollAnimation>
        </Col>
      </Row>

      <Row>
        <Col className='service-card shoe'>
          <ScrollAnimation
            animateIn='animate__fadeInLeft'
            duration={0.5}
            delay={1000}
            animateOnce
          >
            <Card>
              <div
                className='full-background'
                style={{ backgroundImage: `url(${shoe})` }}
              ></div>

              <Card.Body>
                <Card.Title>Cordonnerie Traditionnelle</Card.Title>

                <Card.Text>
                  Rénovation de chaussures, sacs, maroquineries, vestes;
                  blousons et entretien des cuirs.
                </Card.Text>
              </Card.Body>
            </Card>
          </ScrollAnimation>
        </Col>

        <Col className='service-card sneakers'>
          <ScrollAnimation
            animateIn='animate__fadeInLeft'
            duration={0.5}
            delay={800}
            animateOnce
          >
            <Card>
              <div
                className='full-background'
                style={{ backgroundImage: `url(${sneakers})` }}
              ></div>

              <Card.Body>
                <Card.Title>
                  Pressing
                  <br />à Sneakers
                </Card.Title>

                <Card.Text>
                  Entretien, rénovation et customisation de vos baskets.
                </Card.Text>
              </Card.Body>
            </Card>
          </ScrollAnimation>
        </Col>

        <Col className='service-card keys'>
          <ScrollAnimation
            animateIn='animate__fadeInLeft'
            duration={0.5}
            delay={600}
            animateOnce
          >
            <Card>
              <div
                className='full-background'
                style={{ backgroundImage: `url(${keys})` }}
              ></div>

              <Card.Body>
                <Card.Title>
                  Reproduction
                  <br />
                  de clés
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </ScrollAnimation>
        </Col>

        <Col className='service-card services'>
          <ScrollAnimation
            animateIn='animate__fadeInLeft'
            duration={0.5}
            delay={400}
            animateOnce
          >
            <Card>
              <div
                className='full-background'
                style={{ backgroundImage: `url(${services})` }}
              ></div>

              <Card.Body>
                <Card.Title>
                  Multi
                  <br />
                  services
                </Card.Title>

                <Card.Text>
                  Accessoires et produits de la chaussure et du cuir, produits
                  d'artisans locaux.
                </Card.Text>
              </Card.Body>
            </Card>
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  )
}

export default Services
