// SectionLeft.js
import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

const PreventComponent = ({ title, photo, text, text2 }) => {
    return (
        <Card className="mb-4 p-3" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <Row noGutters className="align-items-center">

            <Col md={12}>
              <Card.Body>
                <Card.Title as="h4" style={{ color: '#2c3e50', fontWeight: 'bold' }}>{title}</Card.Title>
                <Card.Text style={{ fontSize: '1rem', color: '#34495e' }}>{text}</Card.Text>
                {text2 && <Card.Text style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>{text2}</Card.Text>}
              </Card.Body>
            </Col>
          </Row>
        </Card>
      );
};
    
export default PreventComponent;
