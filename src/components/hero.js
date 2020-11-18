import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Duahau from '../pic/watermelon.svg';
function Hero(props) {
    let title = props.title!=='About me'?<h1 className="display-1 font-weight-bolder">{props.title.substring(0,4)}
    <img alt="watermelon" style={{ position:'relative',bottom:0,height:'6rem',width:'3.5rem'}} src={Duahau}/>{props.title.substring(5)}</h1>
    :<h1 className="display-1 font-weight-bolder">{props.title}</h1>
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        {props.title && title}
                        {props.subtitle && <h3 className="display-4 font-weight-light">{props.subtitle}</h3>}
                        {props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}
export default Hero;