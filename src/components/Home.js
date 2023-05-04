import { Link } from 'react-router-dom';
import  Tickets  from './../images/movie_tickets.jpg'
const Home = () =>{
return (
    <>
    <div className="text-center">
        <h2>Find a movie to watch tonight!</h2>
        <hr />
        <Link>
        <img src={Tickets} alt="movie_tickets"></img>
        </Link>
    </div>
    </>
);
};

export default Home;