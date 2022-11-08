/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["javaScript Coder", "FrontEnd Dev.", "Crew Store"]
    const [text, setText] = useState ('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta )

        return () => {clearInterval(ticker)};
    } ,[text]) 

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1 );
            setDelta(300);

        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={4} xsl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{"Hello I'm Panji Prasetyo "} <span className="wrap">{text}</span></h1>
                        <p>Hi there! perkenalkan Nama saya Panji Prasetyo, Junior web developer yang siap mengembangkan Website untuk anda</p>
                        <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header-img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}