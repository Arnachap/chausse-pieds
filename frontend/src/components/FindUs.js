import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import Map from './Map'

import shop from '../img/shop.jpg'
import logo from '../img/logo-black.png'

const FindUs = () => {
  return (
    <Container fluid>
      <Row className='justify-content-center'>
        <Col lg='6'>
          <ScrollAnimation
            animateIn='animate__fadeInDown'
            duration={0.5}
            delay={200}
            animateOnce
          >
            <div className='section-title'>
              <h2>Nous trouver</h2>

              <p className='lead'>Venez nous rendre visite à la boutique !</p>
            </div>
          </ScrollAnimation>
        </Col>
      </Row>

      <Row>
        <Col className='justify-content-center'>
          <Map />
        </Col>

        <Col>
          <ScrollAnimation
            animateIn='animate__fadeInRight'
            duration={0.5}
            delay={600}
            animateOnce
          >
            <Card style={{ width: '600px' }}>
              <Card.Img src={shop} />

              <Card.Body>
                <Card.Text>
                  <img src={logo} />
                  DU MARDI AU VENDREDI
                  <br />
                  8H30 - 12H30
                  <br />
                  LE SAMEDI
                  <br />
                  8H30 - 15H30
                </Card.Text>
              </Card.Body>
            </Card>
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  )
}

export default FindUs
