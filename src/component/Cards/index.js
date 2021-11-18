import React, { useState } from 'react'
import { useHistory } from 'react-router';
import "./style.css"


const Cards=()=> {
    const history=useHistory();
    const [Cards,]=useState([ {

        id:0,
        name:"Summer",
        img:"https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/Summer-beach-image.jpg"
    },
    {
        id:1,
        name:"Winter",
        img:"https://www.almanac.com/sites/default/files/image_nodes/winter_sunrise-2.jpg"  
    },
    {
        id:2,
        name:"Spring",
        img:"https://cdn.britannica.com/05/155405-050-F8969EE6/Spring-flowers-fruit-trees-bloom.jpg"
    },
    {
        id:3,
        name:"Autumn",
        img:"https://cdn.britannica.com/88/137188-050-8C779D64/Boston-Public-Garden.jpg"
    }])
    
    return (
        <div>
            <ul>
                {Cards.map((item,i)=>{
                    return(
                        <li>
                            <h2>{item.name}</h2>
                            <img src={item.img}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Cards;