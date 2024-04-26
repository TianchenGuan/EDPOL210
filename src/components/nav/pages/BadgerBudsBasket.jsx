import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionLeft from "./SectionLeft"
import SectionRight from "./SectionRight"
import photo1 from "../../../Photos/1.png"
import photo2 from "../../../Photos/2.png"
import photo3 from "../../../Photos/3.png"

export default function BadgerBudsBasket() {
    const sectionsData = [
        {
            title: "Physical Effects",
            photo: photo1,
            text: "Bullying has been closely linked to a multitude of physical health problems in children. The immediate effects can be clear-cut, such as injuries sustained during a physical altercation. However, the repercussion of bullying extends far beyond the visible scars. Children exposed to the persistent strain of bullying often experience a range of psychosomatic symptoms, including trouble with sleep—whether it's difficulty in falling asleep or staying asleep—as well as physical complaints like stomachaches, headaches, and chronic pain. These ailments are not only distressful but sometimes are complex enough to evade clear medical diagnosis, known as somatization.",
            text2: "The insidious nature of bullying also triggers a biochemical response; it raises cortisol levels, the body's stress hormone, which can result in a chain reaction of adverse effects on the immune system and hormonal balance. Over time, the heightened stress response to bullying has been observed in imaging studies to influence brain activity and functioning. These changes offer a window into understanding the altered behaviors and the struggle to cope that children facing bullying often endure, signaling a critical need for intervention."
        },
        {
            title: "Psychological Effects",
            photo: photo3,
            text: "The psychological ramifications of bullying are extensive and troubling, with victims often grappling with depression and anxiety. A damaged self-esteem is common, as are instances of self-harm, which tend to be particularly prevalent among girls. For boys, there's a tendency toward aggression and a higher likelihood of engaging in violence or crime. Those with pre-existing mental health challenges are not only more susceptible to being bullied but also to feeling the adverse effects more acutely.",
            text2: "Cyberbullying introduces additional layers to the problem. It's associated with even higher levels of depression, suicidal thoughts, and behavioral issues than traditional bullying. Children who are cyberbullied frequently endure significant emotional distress, which can manifest as hostility and delinquent behavior, further emphasizing the urgent need for effective mental health support and preventive measures."
            
        },
        {
            title: "Academic Effects",
            photo: photo2,
            text: "Research has consistently shown that bullying can have a negative impact on how well children and adolescents do in school. It has a negative impact on both grades and standardized test scores starting as early as kindergarten and continuing through high school."
        }
    ];

    return (
        <Container style={{ backgroundColor: '#f8f9fa' }}>
            <Row>
                <Col>
                    <h1>Consequences of Bullying</h1>
                </Col>
            </Row>
            <br></br>
            <p>It is important for parents and people who work with children and adolescents to understand that bullying can have both short- and long-term effects on everyone involved. While most research on bullying has been about children and adolescents who have been bullied, those who bully others are also negatively impacted, as are those who are both bullied and bully others, and even those who are not directly involved but witness bullying.</p>
            <br></br>
            <Row>
                <Col>
                    <h3>Children Who Have Been Bullied</h3>
                </Col>
            </Row>

            <Row key={1}>
                <Col>
                    <SectionLeft title={sectionsData[0].title} photo={sectionsData[0].photo} text={sectionsData[0].text} text2={sectionsData[0].text2} />
                </Col>
            </Row>
            <Row key={2}>
                <Col>
                    <SectionRight title={sectionsData[1].title} photo={sectionsData[1].photo} text={sectionsData[1].text} text2={sectionsData[1].text2} />
                </Col>
            </Row>
            <Row key={3}>
                <Col>
                    <SectionLeft title={sectionsData[2].title} photo={sectionsData[2].photo} text={sectionsData[2].text} text2={sectionsData[2].text2} />
                </Col>
            </Row>
            {/* Add Footer here */}
        </Container>
    );
}