import React from 'react'
import { Col, Container,Button, Row ,Card} from 'react-bootstrap'

function CardBs() {
  return (
    <div>
      <Container>
        <Row>
            <Col md={4}>
            <Card> 
            
             <Card.Img src="images/images.jpeg" />
             <Card.Body>
             <Card.Title>
                Card Title
             </Card.Title>
             <Card.Subtitle>Card Subtitle</Card.Subtitle>
             <Card.Text> Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolorem aliquid, laborum quaerat dignissimos id repellendus minima repudiandae tenetur debitis incidunt sint dolor omnis inventore asperiores sit sunt, vitae amet!</Card.Text>
             <Button>Read More...,</Button>
             </Card.Body>
            </Card>

            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CardBs
