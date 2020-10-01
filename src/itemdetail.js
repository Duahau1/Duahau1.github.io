import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
const Item = ({match}) =>{
    useEffect(()=>{
        console.log(match)
        fetchItem(match.params.id);
    },[])

    let fetchItem = async (animeName)=>{
        let data = await (await fetch(`https://animechanapi.xyz/api/quotes?anime=${animeName}`)).json();
        setItem(data.data);
    }
    const [item,setItem] = useState([])

    return (
        <div>
            <h1>The anime you are looking at is {match.params.id}</h1>
            
            {item.map((value,i) =>{
             return <p key={i}>{value.quote}</p>   
            })}
        </div>

    )
}
export default Item;