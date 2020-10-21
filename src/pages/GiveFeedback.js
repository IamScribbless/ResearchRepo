import React from 'react'; 
import StarRating from "../components/StarRating"; 
import Feedback from '../components/Feedback';
import { Link } from "react-router-dom";


function GiveFeedback(){
    return(
<>
<Link to="/StarRating">
<StarRating
totalStars={5} />
</Link>
</>
    );
}

export default GiveFeedback; 