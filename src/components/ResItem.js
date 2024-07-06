import { IMG_URL } from "../utils/Constants";
const ResItem = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating} = resData?.info;
    console.log(cloudinaryImageId)
    return (
        <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
           <img src={IMG_URL+resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(', ')} </h5>
            <h5>Rating : {avgRating}</h5>
        </div>
    )
}
export default ResItem