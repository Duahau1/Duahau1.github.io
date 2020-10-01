import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
const Tweet = (props) =>{
    useEffect(()=>{
        fetchItems()
    },[])
    const fetchItems = async () =>{
        let data = await (await fetch ("https://animechanapi.xyz/api/quotes/")).json();
        console.log(data);
        setItems(data.data)
    }
    const [items,setItems] = useState([])
    return (
        <div className='tweet'>
            <h1>This is my Tweet </h1>
            <h2>Number of Likes</h2>
    <p>My post: {props.message}</p>
    <p>Written by {props.name}</p>
        
            {items.map((value,i) =>{
             return <p key={i}>{value.quote} <b>in the movie <Link to={`/tweet/${value.anime}`}>{value.anime}</Link></b></p>   
            })}
        

        </div>

    )
}
export default Tweet;