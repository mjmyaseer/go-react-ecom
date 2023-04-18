import Ticket from './../images/movie_tickets.jpg'
const Home = () => {
    return (
        <>
            <div className='text-center'>
                <h2>Find a Movie to Watch Tonight!</h2>
                <hr />
                <div>
                    <img src={Ticket} alt='movie_ticket'></img>
                </div>
            </div>
        </>
    )
}

export default Home;