import { Col, Container, Row } from "react-bootstrap";
import { Divider } from "antd";
export default function MoreResources(props) {
    const references = [
        {
            author: "UNICEF Parenting",
            year: "n.d.",
            title: "Bullying: What is it and how to stop it.",
            url: "https://www.unicef.org/parenting/child-care/bullying"
        },
        {
            author: "Assistant Secretary for Public Affairs (ASPA)",
            year: "2021",
            title: "How to prevent bullying.",
            url: "https://www.stopbullying.gov/prevention/how-to-prevent-bullying"
        },
        {
            author: "Assistant Secretary for Public Affairs (ASPA)",
            year: "2023",
            title: "What is bullying.",
            url: "https://www.stopbullying.gov/bullying/what-is-bullying"
        },
        {
            author: "YouTube",
            year: "2020",
            title: "What is bullying? - sel sketches.",
            url: "https://www.youtube.com/watch?v=pDG1-BCZvTE&t=2s&ab_channel=SELSketches"
        },
        {
            author: "YouTube",
            year: "2022",
            title: "What is bullying? for kids | how to stop bullying | national bullying prevention month | twinkl USA.",
            url: "https://www.youtube.com/watch?v=ffzIhWoi5ac&ab_channel=TwinklTeachingResources-UnitedStates"
        },
        {
            author: "YouTube",
            year: "2022",
            title: "Academic bullying at UW-Madison. YouTube.",
            url: "https://www.youtube.com/watch?v=eXIzDg6kgqw&ab_channel=Channel3000%2FNews3Now "
        },
        {
            author: "YouTube",
            year: "2020",
            title: "What to do about... bullying! - sel sketches.",
            url: "https://www.youtube.com/watch?v=5l6mDwanphM&ab_channel=SELSketches"
        },
        {
            author: "YouTube",
            year: "2018",
            title: "Protect yourself rules - bullying.",
            url: "https://www.youtube.com/watch?v=4mrE5zgEvt4&ab_channel=FightChildAbuse"
        },
        {
            author: "Rita Kohli & Daniel G. Solórzan",
            year: "2012",
            title: "Teachers, please learn our names!: racial microagressions and the K-12 classroom,",
            url: "https://www.youtube.com/watch?v=4mrE5zgEvt4&ab_channel=FightChildAbuse"
        },
        {
            author: "Ross, K. M.",
            year: "2020",
            title: "Call it what it is: Anti-blackness. The New York Times.",
            url: "https://www.nytimes.com/2020/06/04/opinion/george-floyd-anti-blackness.html "
        }
    ];
    return <div style={{ backgroundColor: '#f8f9fa' }}>
        <h1 style={{ textAlign: 'center' }}>Additional Resources</h1>
        <br />
        <div style={{ backgroundColor: '#f8f9fa', height: 'calc(100vh - 200px)' }}>
            <br />
            <Container fluid>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} sm={8} md={5} lg={4} xl={3}>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/eXIzDg6kgqw?si=4Br9hKYaBqVCsXuw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </Col>
                    <Col xs={12} sm={8} md={5} lg={4} xl={3}>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/ffzIhWoi5ac?si=6jOxYbwUvoXvEutj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </Col>
                    <Col xs={12} sm={8} md={5} lg={4} xl={3}>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/5l6mDwanphM?si=EU_Kus8uqVskdpuM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </Col>
                    <Col xs={12} sm={8} md={5} lg={4} xl={3}>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/4mrE5zgEvt4?si=zBRMpxPyieuk9CA4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </Col>
                </Row>
                <Divider style={{ height: '50px' }}>Getting Help</Divider>
                <Row style={{ textAlign: 'center' }}>
                    <Col xs={12} style={{display:'flex', flexDirection:'row', textAlign:'center', justifyContent:'center'}} >
                        <h5 style={{ textAlign: 'center' }}>Hostile and Intimidating Behavior: </h5>
                        <a href={"https://hr.wisc.edu/hib/"} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue', textAlign:'center', marginLeft:'10px' }}>
                          https://hr.wisc.edu/hib/
                        </a>
                    </Col>
                </Row>
                <Divider style={{ height: '50px' }}>References</Divider>
                <Row>
                    <Col xs={12}>
                        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            {references.map((ref, index) => (
                                <li key={index} style={{ marginBottom: '10px' }}>
                                    <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue' }}>
                                        {`${ref.author}. (${ref.year}). ${ref.title}. Retrieved from ${ref.url}`}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>
        </div>
    </div>
}