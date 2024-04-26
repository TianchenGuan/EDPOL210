import { Col, Container, Row } from "react-bootstrap";

export default function BadgerBudsLanding(props) {

    return <div style={{backgroundColor: '#f8f9fa', height: 'calc(100vh - 200px)'}}>
        <h1>Understanding and Preventing School Bullying for Youth</h1>
        <br/>
        <Container fluid={true} style={{height:'100%'}}>
            <Row>
                <Col xs={12} lg={4} xl={6}>
                    <h3>What is Bullying?</h3>
                    <p>Bullying is a form of aggressive behavior in which someone intentionally and repeatedly causes another person injury or discomfort. Bullying can take many forms, including physical violence, verbal harassment, social exclusion, and online abuse. It's an issue that affects individuals of all ages but is particularly prevalent among school-aged children.</p>
                    <h3>How Common is Bullying?</h3>
                    <p>Bullying is a widespread issue that occurs across different cultures and educational settings. According to data from UNICEF, nearly one-third of young people worldwide have experienced bullying, with some facing this on a daily basis. This prevalent issue not only affects the immediate well-being of young individuals but can have long-lasting effects on their mental health and academic performance.</p>
                    <h3>Our Mission</h3>
                    <p>Our website aims to shed light on the seriousness of school bullying through detailed case studies, discussions on the psychological and academic impacts of bullying, and exploring effective strategies for prevention and intervention. By bringing together resources, expert opinions, and community insights, we strive to create an informative and supportive space to combat bullying in educational environments.</p>
                </Col>
                <Col xs={12} lg={8} xl={6}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pDG1-BCZvTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
        </Container>
    </div>
}