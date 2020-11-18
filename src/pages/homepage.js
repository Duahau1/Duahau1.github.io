import React from 'react';
import Hero from '../components/hero';
import Carousel from '../components/carousel';
function homePage (props){
    return(
        <div>
        <Hero title={props.title} subtitle={props.subtitle} text ={props.text}/>
        <Carousel />
        </div>
        )
}
export default homePage;