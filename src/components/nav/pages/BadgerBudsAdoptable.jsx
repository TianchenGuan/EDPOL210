import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Component from './Component';


export default function RecentNews(props) {
    const insights = [
        {
            title: 'Microaggressions in Educational Settings',
            text: "Youths, particularly from undocumented and marginalized communities, often face subtle but pervasive forms of discrimination known as microaggressions. These can manifest as backhanded compliments, stereotypes, or subtle exclusions, impacting students' psychological well-being and academic performance."
        },
        {
            title: 'Lack of Supportive Research Practices',
            text: "Educational research often overlooks the resilience and strengths of students from diverse backgrounds. There is a need for more desire-based research practices that highlight the aspirations and capabilities of these students instead of focusing solely on their challenges."
        },
        {
            title: 'Stigma and Social Isolation',
            text: "The stigma associated with being undocumented or belonging to a marginalized group can lead to social isolation, making it difficult for students to form connections and access support networks that are crucial for academic and personal growth."
        }
    ];

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Recent News: Tragic Bullying Incident in Hebei, China</h2>
            <br />
            <br />
            <Container fluid={false}>
                <Row>
                    <Col xs={12} lg={8} xl={8}>
                        <p> Recently, a junior high school student killed a classmate in Handan, Hebei Province, using cruel means, or a premeditated gang crime with a clear division of labor, which triggered many netizens' hot discussion.                        </p>
                        <p>On the afternoon of March 10th, a young 13-year-old, Xiao Wang, told his grandmother he was going out to play with classmates and left his home in Handan, Hebei. Earlier in the day, there seemed to be no signs of distress when he spoke with his grandfather over the phone. However, alarm grew when, by 5 PM, Xiao Wang’s phone was turned off and unreachable. Despite extensive searches by his family, he remained missing until late evening when the police were finally alerted.</p>
                        <p>Simultaneously, Wang's family tried to trace his last activities, finding out through WeChat records that he had transferred money to a classmate shortly before he disappeared. This clue, along with street surveillance footage, helped the police connect Xiao Wang’s last known movements with three of his classmates. Under interrogation, confronted with the evidence from the money transfer and surveillance, the boys revealed the chilling truth: Xiao Wang had been brutally beaten to death with a shovel and his body hidden in a nearby vegetable greenhouse to cover up the murder. </p>
                        <p>The murder was described by the victim’s aunt as premeditated, with a clear division of roles among the three perpetrators. They lured Xiao Wang to the greenhouse, where they executed their gruesome plan with chilling precision and brutality, disfiguring his face beyond recognition. After the murder, they coldly buried his body, transferred the money from his WeChat account to theirs, and returned home as if nothing had happened.</p>
                    </Col>
                    <Col xs={12} lg={4} xl={4}>
                        <img src="https://picx.zhimg.com/80/v2-5e80a7d713d0228538942167e755adf3_720w.webp?source=1def8aca" alt="Scene of the incident" style={{ width: '100%', marginBottom: '20px' }} />
                        <p style={{ fontSize: '15px', marginTop: '-10px', color: 'gray' }}>Criminal</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={7} xl={7}>
                        <img src="https://img2.baidu.com/it/u=2998480694,3493029712&fm=253&fmt=auto&app=120&f=JPEG?w=522&h=295" alt="Scene of the incident" style={{ width: '100%', marginBottom: '20px' }} />
                        <p style={{ fontSize: '15px', marginTop: '-10px', color: 'gray' }}>Crime scene</p>
                    </Col>
                    <Col xs={12} lg={5} xl={5}>
                        <p>
                            In the following days, while the police and family frantically searched for Xiao Wang, the perpetrators attended school, maintaining a facade of normalcy. It wasn’t until solid surveillance and financial evidence was presented that two of the boys confessed to the murder, with the third, a ringleader, continuing to deny involvement until overwhelming evidence and co-conspirator testimony led to his confession. This event not only highlighted the severe issue of bullying that Xiao Wang had silently endured but also shook the community with the realization that such young individuals could commit such a calculated act of violence.                            </p>
                    </Col>
                    <br></br>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Additional Challenges:</h2>
                        <br></br>
                        {insights.map((item, index) => (
                            <Component key={index} title={item.title} photo={item.photo} text={item.text} />
                        ))}
                    </Col>
                </Row>
            </Container>

        </div>
    );
}
