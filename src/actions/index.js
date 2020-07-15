//action types 
export const ADD_MOVIES = "ADD_MOVIES";

//action creators
const initialMovieState = {
    list:[],
    favoourites:[]
}
export function addmovies(movies) {
  return {
    type: "ADD_MOVIES",
    movies,
  };
}
