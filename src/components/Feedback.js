import React from 'react';
import StarRating from "../components/StarRating"; 
import { Link } from "react-router-dom";


function Feedback(){
    return(
        <div>
            <Link to="/GiveFeedback">
        <button className=" text-white border border-white rounded-full px-3 py-2 my-1 text-sm text-white"> Give Feedback </button>
        </Link>
        </div>
    );

}

export default Feedback; 