import React from 'react';
import { Col, Container, Row, Card, Image } from 'react-bootstrap';
import SectionLeft from "./SectionLeft"
import SectionRight from "./SectionRight"
import photo4 from "../../../Photos/4.png"

import Component from './Component';

export default function Prevent() {
    const preventionSteps = [
        {
            title: '1. Educate about bullying',
            photo: '/path/to/education-photo.jpg',
            text: 'Inform children about the nature of bullying to help them recognize and understand the issue, whether they are directly involved or as a bystander.'
        },
        {
            title: '2. Foster Open Communication',
            photo: '/path/to/communication-photo.jpg',
            text: 'Engage in daily conversations with your children about their experiences and feelings to make them comfortable discussing bullying.'
        },
        {
            title: '3. Encourage Positive Role Models',
            photo: '/path/to/role-model-photo.jpg',
            text: 'Teach your children to be inclusive and kind, and to stand up against bullying if they see it happening. Show your child how to treat other children and adults with kindness and respect by doing the same to the people around you'
        },
        // ... Add other sections here
    ];

    const actionSteps = [
        {
            title: '1. Listen to your child openly and calmly',
            photo: '/path/to/education-photo.jpg',
            text: 'Focus on making them feel heard and supported, instead of trying to find the cause of the bullying or trying to solve the problem. Make sure they know that it is not their fault. '
        },
        {
            title: '2. Reassure your child',
            photo: '/path/to/communication-photo.jpg',
            text: 'Tell the child that you believe them; that you are glad they told you; that it is not their fault; that you will do your best to find help. '
        },
        {
            title: '3. Talk to the teacher or school ',
            photo: '/path/to/role-model-photo.jpg',
            text: 'You and your child do not have to face bullying alone. Ask if your school has a bullying policy or code of conduct. This may apply for both in-person bullying and online.'
        },
        // ... Add other sections here
    ];
    return (
        <Container style={{ backgroundColor: '#f8f9fa' }}>
            <Row>
                <Col>
                    <h1>Preventing Bullying</h1>
                    <br></br>
                    <h3>How can I help prevent bullying?</h3>
                </Col>
            </Row>
            <br></br>
            {preventionSteps.map((section, index) => (
                <Component key={index} title={section.title} photo={section.photo} text={section.text} />
            ))}
            <br></br>
            <Row>
                <Col>
                    <h3>How to determine if a child is being builled?</h3>
                </Col>
            </Row>
            <br></br>
            <Card className="mb-4 p-3" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <Row noGutters className="align-items-center">
                    <Col md={7}>
                        <Card.Body>
                            <Card.Title as="h4" style={{ color: '#2c3e50', fontWeight: 'bold' }}>Signs of Being Bullied: </Card.Title>
                            <ul>
                                <li>Physical marks such as unexplained bruises, scratches, broken bones, and healing wounds</li>
                                <li>Fear of going to school or joining school events</li>
                                <li>Being anxious, nervous or very vigilant</li>
                                <li>Having few friends in school or outside of school</li>
                                <li>Losing friends suddenly or avoiding social situations</li>
                                <li>Clothing, electronics, or other personal belongings being lost or destroyed</li>
                                <li>Often asking for money</li>
                                <li>Low academic performance</li>
                                <li>Absenteeism, or calling from school asking to go home</li>
                                <li>Trying to stay near adults</li>
                                <li>Not sleeping well and may be having nightmares</li>
                                <li>Complaining of headaches, stomach aches, or other physical ailments</li>
                                <li>Regularly distressed after spending time online or on their phone</li>
                                <li>Becomes unusually secretive, especially regarding online activities</li>
                                <li>Being aggressive or having angry outbursts</li>
                            </ul>
                        </Card.Body>
                    </Col>
                    <Col md={5}>
                        <Image src={photo4} alt={"photo"} fluid />
                    </Col>
                </Row>
            </Card>
            <br></br>
            <Row>
                <Col>
                    <h3>What should I do if my child or friend is being bullied or threatened?</h3>
                </Col>
            </Row>
            <br></br>
            {actionSteps.map((section, index) => (
                <Component key={index} title={section.title} photo={section.photo} text={section.text} />
            ))}
        </Container>
    );
}