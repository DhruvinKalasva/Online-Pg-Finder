import React from 'react'
import "./Searchitem.css"
import headerimg from "../../images/header.jpg"
import {FaStar} from "react-icons/fa"
import { Link } from 'react-router-dom'
 
function Searchitem({item}) {

     return (
       <div>
           <div className='agap'></div>
   
           <div className='pgcards'>
           
   
               <div className='pgcard' key={item._id} >
                <div><img  src={item.photos[0]} alt='theimg'/></div>
                   <div className='detailcard'>
                    <div className='uppercard'>
                   <h3>{item.pgname}</h3>
                   <span>{item.rating} <FaStar size={20} style={{color: "orange",marginRight:"1rem"}}/></span>
                    </div>
                    <div className='lowercard'>
                   <p className='area'>{item.city}, {item.area}</p>
                   <p className='price'>Price : Rs. {item.price} <br /><Link to={`/pgs/${item._id}`}><button className='viewpg'>View Pg</button> </Link></p>
                    </div>
                   </div>
                     
               </div>  
               
           
       </div>
       </div>
     )
}

export default Searchitem