import React from 'react'
import "./FeaturedPgs.css"
import headerimg from "../../images/header.jpg"
import useFetch from '../../hooks/useFetch'
import { Link } from 'react-router-dom'



function FeaturedPgs() {

 const {data,loading,error} = useFetch("/pgs?featured=true")

 console.log(data);
  return (
    <div>
        <h1 className='fheading'>Featured Pgs</h1>

        <div className='featuredpgcards'>
        {loading ? "Loading" : <>

        {data.map(item=>(

            <div className='fcard' key={item._id}>
                <Link to={`/pgs/${item._id}`}>

                <img  src={item.photos[0]} alt='theimg'/>
                <h3>{item.pgname}</h3>
                <p className='area'>{item.city}, {item.area}</p>
                <p className='price'>Price : Rs. {item.price}</p>
                </Link>
            </div>  
        ))
    }

        </>}
    </div>
    </div>
  )
}

export default FeaturedPgs