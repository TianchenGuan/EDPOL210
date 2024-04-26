// Section.js
import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

const SectionRight = ({ title, photo, text, text2 }) => {
    return (
        <Card className="mb-3">
          <Row noGutters>
            <Col md={6}>
              <Card.Body>
                <Card.Title as="h3">{title}</Card.Title>
                <br></br>
                <Card.Text>{text}</Card.Text>
                <Card.Text>{text2}</Card.Text>
              </Card.Body>
            </Col>
            <Col md={6}>
              <Image src={photo} alt={title} fluid />
            </Col>
          </Row>
        </Card>
      );
    };
    

export default SectionRight;
