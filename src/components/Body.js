import { useState } from 'react'
import ResItem from './ResItem'
import {restaurants} from '../utils/mockData'
const Body = () => {
    const [rests, setRests] = useState(restaurants) 
    return (
        <div className='body'>
            <div className='filter'>
                <button className='btn' onClick={()=>{
                   const filteredRests = rests.filter((res)=>res.info.avgRating >= 4);
                   setRests(filteredRests)
                   console.log(rests);
                }}>Top Restaurants</button>
            </div>
            <div className='res-container'>
               {
                rests.map((rests)=><ResItem key={rests.info.id} resData={rests}/>)
               }           
            </div>
        </div>
    )
}
export default Body