import React from 'react';
import restApi from '../pic/api.svg';
import idolRecog from '../pic/face_recog.svg';
import shopList from '../pic/shopping-list.svg';
import virus from '../pic/virus.svg';
import Card from '../components/card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'SNH48 Rest API',
                    subTitle: 'Provide information about SNH48 and GNZ48 teams\'s member  ',
                    imgSrc: restApi,
                    link: 'https://app.swaggerhub.com/apis-docs/Duahau1/SNH48TEAM/1.1.2',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Idol Recognizer',
                    subTitle: 'Intake a link of image and identify member of SNH48 team SII',
                    imgSrc: idolRecog,
                    link: 'https://github.com/Duahau1/idol-recognizer',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Simple Shopping List',
                    subTitle: 'A simple shopping list using AngularJS',
                    imgSrc: shopList,
                    link: 'https://github.com/Duahau1/ShoppingList',
                    selected: false
                }
                ,
                {
                    id: 3,
                    title: 'Covid19 Tracker',
                    subTitle: 'A React based website that tracks Covid19 nationwide & worldwide',
                    imgSrc: virus,
                    link: 'https://github.com/Duahau1/CovidTracker_Cs481',
                    selected: false
                }
            ]
        }
    }
    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = !items[id].selected;
        items.forEach((value) => {
            if (value.id !== id) {
                value.selected = false;
            }
        })
        this.setState({
            items
        })
    }
    makeItems = (items) => {
        return items.map(item => <Card item={item} click={(()=> this.handleCardClick(item.id))} key={item.id}></Card>)
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>)
    }
}
export default Carousel