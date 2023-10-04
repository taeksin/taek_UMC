import { movies } from './movieDummy';
import Movie from './Components/Movie';

function App() {
  return (
    <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <Movie 
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            )
          })
        }
    </div>
  );
}

export default App;
