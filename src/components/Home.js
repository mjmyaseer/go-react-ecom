import { Link } from 'react-router-dom';
import Ticket from './../images/movie_tickets.jpg'
const Home = () => {
    return (
        <>
            <div className='text-center'>
                <h2>Find a Movie to Watch Tonight!</h2>
                <hr />
                <Link to="/login">
                    <img src={Ticket} alt='movie_ticket'></img>
                </Link>
            </div>
        </>
    )
}

export default Home;