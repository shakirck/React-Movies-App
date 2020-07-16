//action types 
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE__FROM_FAVOURITE = "REMOVE__FROM_FAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";

//action creators
const initialMovieState = {
    list:[],
    favoourites:[]
}
export function addmovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export function addFavourite(movie) {
  return {
    type: ADD_TO_FAVOURITE,
    movie,
  };
}
export function removeFromFavourites(movie){
  return {
    type:REMOVE__FROM_FAVOURITE,
    movie
  }
}
export function setShowFavourites(val){
  return {
    type:SET_SHOW_FAVOURITES,
    val
  }
}
