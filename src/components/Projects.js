/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import 'animate.css'
//import TrackVisibility from 'react-on-screen'

export const Projects = () => {

    const projects = [
      {
        title: "Travel Online Application",
        description: "",
        imgUrl: projImg1,
      },
      {
        title: "Business Startup",
        description: "",
        imgUrl: projImg2,
      },
      {
        title: "Website 3.0",
        description: "",
        imgUrl: projImg3,
      },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Projects
                        </h2>
                        <p>
                            Berikut adalah beberapa contoh Project landing page application yang pernah saya kembangkan sendiri secara Fullstack atau bersama dengan TEAM menggunakan teknologi javaScript.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first" className="">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                 <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Tab 1
                                    </Nav.Link>
                                 </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Tab 2
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab 3
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project
                                                    } />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Coming Soon</Tab.Pane>
                                <Tab.Pane eventKey="third">Coming Soon
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}