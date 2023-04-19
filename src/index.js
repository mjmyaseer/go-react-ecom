import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Movies from './components/Movies';
import Genre from './components/Genres';
import GraphQL from './components/GraphQL';
import Login from './components/Login';
import EditMovies from './components/EditMovies';
import ManageCatalogue from './components/ManageCatalogue';
import Movie from './components/Movie';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<ErrorPage />,
    children:[
      {index:true, element:<Home />},
      {
        path:"/movies",
        element:<Movies />
      },{
        path:"/movies/:id",
        element:<Movie />
      },{
        path:"/admin/movie/0",
        element:<EditMovies />
      },{
        path:"/genres",
        element:<Genre />
      },{
        path:"/manage-catalogue",
        element:<ManageCatalogue />
      },{
        path:"/graphql",
        element:<GraphQL />
      },{
        path:"/login",
        element:<Login />
      },
    ]

  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);