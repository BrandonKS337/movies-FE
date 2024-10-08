import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
// import {Link, useNavigate} from "react-router-dom";
// import Button from 'react-bootstrap/Button';

//Note: Destructure passed in props

const Hero = ({ movies }) => {
  return (
    <div>
      <Carousel>
        {movies?.map((movie) => {
          return (
            <Paper>
              <div className="movie-card-container">
                <div className="movie-card">
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt="Movie Poster" />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
