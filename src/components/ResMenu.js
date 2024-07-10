//import { useState, useEffect } from 'react';
import useRestuarantMenu from '../utils/useRestuarantMenu';
import { useParams } from 'react-router-dom';
const ResMenu = () => {
    
    //const [resInfo, setResInfo] = useState({});
    const {resId} = useParams()
    const resInfo = useRestuarantMenu(resId);
    const { name, cuisines = [], avgRating, costForTwo } = resInfo;
    return (
        <div className=''>
            <h1>{name}</h1>
            <div>
                <h2>Cuisines</h2>
                <ul>
                    {cuisines.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ul>
            </div>
            <div className='cost'>
                {avgRating}
            </div>
            <div className='rating'>
            Cost - Rs.{costForTwo ? costForTwo / 100 : 'N/A'}
            </div>
        </div>
    );
};

export default ResMenu;
