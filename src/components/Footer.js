import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="social-icon" id="footer">
              <a href="https://www.linkedin.com/in/panji-prast-77285323b/" target="blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://web.facebook.com/panjoel.eroor/" target="blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/panjipras12_/" target="blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}