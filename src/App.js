import { Outlet } from 'react-router-dom';
import Home from './components/Home'
function App() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="col">Go Watch a Movie!</h1>
        <div className="col text-end">
          <a href="#!"><span className="badge bg-success">Login</span></a>
        </div>
        <hr />
        </div>
        <div className="row">
          <div className="col-md-2">
            <nav>
              <div className="list-group">
                <a href="/" className="list-group-item list-group-item-action">Home</a>
                <a href="/movies" className="list-group-item list-group-item-action">Movies</a>
                <a href="#!" className="list-group-item list-group-item-action">Genre</a>
                <a href="#!" className="list-group-item list-group-item-action">Add Movie</a>
                <a href="#!" className="list-group-item list-group-item-action">Manage Catalog</a>
                <a href="#!" className="list-group-item list-group-item-action">GraphQL</a>
              </div>
            </nav>
          </div>
          <div className="col-md-10">
            <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
