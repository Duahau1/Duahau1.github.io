import React from 'react';
import CardInfo from './cardinfo';
function Card(props){
return (
    <div className='d-inline-block g-card' onClick={(()=>props.click(props.item))}>
        <img className='g-card-image' style={{padding:'1rem', cursor:'pointer'}}  src={props.item.imgSrc} alt={props.item.subtitle}></img>
        { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subtitle} link={props.item.link} /> }
    </div>
)

}
export default Card;