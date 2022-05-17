import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import shoe from '../img/shoe.jpg'
import sneakers from '../img/sneakers.jpg'
import keys from '../img/keys.jpg'
import services from '../img/services.jpg'

const Services = () => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col lg='6'>
          <h2>Nos Services</h2>

          <p className='lead'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <div
              className='full-background'
              style={{ backgroundImage: `url(${shoe})` }}
            ></div>

            <Card.Body>
              <Card.Title>Cordonnerie Traditionnelle</Card.Title>

              <Card.Text>
                Rénovation de chaussures, sacs, maroquineries, vestes; blousons
                et entretien des cuirs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <div
              className='full-background'
              style={{ backgroundImage: `url(${sneakers})` }}
            ></div>

            <Card.Body>
              <Card.Title>Pressing à Sneakers</Card.Title>

              <Card.Text>
                Entretien, rénovation et customisation de vos baskets.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <div
              className='full-background'
              style={{ backgroundImage: `url(${keys})` }}
            ></div>

            <Card.Body>
              <Card.Title>Reproduction de clés</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <div
              className='full-background'
              style={{ backgroundImage: `url(${services})` }}
            ></div>

            <Card.Body>
              <Card.Title>Multi-services</Card.Title>

              <Card.Text>
                Accessoires et produits de la chaussure et du cuir, produits
                d'artisans locaux.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Services
