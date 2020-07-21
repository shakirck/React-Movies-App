import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addmovies, setShowFavourites } from "../actions";
import {connect} from 'react-redux';


class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    //api call
    //dispatch action here
   
    this.props.dispatch(addmovies(data));
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  };
  render() {
    const {movies,search}=this.props
    const { list, favourites, showFavourites } = movies;
    const displayMovies = showFavourites ? favourites : list;
    
    return (
      <div className="App">
        <Navbar
          dispatch={this.props.dispatch}
          search = {search}
        />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          <div>
            {" "}
            {displayMovies.length == 0 ? <div> No Favourites</div> : null}
          </div>
        </div>
      </div>
    );
  }
}


// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }
function mapStateToProps(state){
  return {
    movies:state.movies,
    search:state.search,
  }
}
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;