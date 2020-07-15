import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addmovies} from '../actions';
class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    //api call
    //dispatch action here
    store.subscribe(()=>{
      console.log('Updated');
      this.forceUpdate();
    })
    this.props.store.dispatch(addmovies(data));

    console.log(this.props.store.getState());
  }
 render(){
  const {list} = this.props.store.getState();
   return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {list.map((movie,index)=>(
            <MovieCard movie={movie} key={`movies-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
 }
}

export default App;
