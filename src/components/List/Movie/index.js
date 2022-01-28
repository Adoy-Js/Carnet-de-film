import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";

import "./styles.scss";

const Movie = () => {

  const [rating, setRating] = useState(false)


  return (
    <li className="movie">
      <div className="movie_date">29/01/2022</div>
      <div className="movie_title">Pirate des caraibes</div>
      <div className="movie_viewer">Maxime</div>
      <div className="movie_score">
        {[...Array(5)].map(star => {
          return <FaStar
          color={rating ? "yellow" : "white"} 
          onMouseEnter={()=>setRating(true)}
          onMouseLeave={()=>setRating(false)}
          />
        })}
      </div>
    </li>
  );
};

export default Movie;
