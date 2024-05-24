//import Movie from "./Components/Movie/Movie";
//import { movies } from "./movieDummy";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Movies from "./Components/Pages/Movies";
import TV from "./Components/Pages/TV";
import Celebrity from "./Components/Pages/Celebrity";
import NotFound from "./Components/Pages/NotFound";
import Header from "./Components/Header";
import MovieDetail from "./Components/Pages/MovieDetail";

/*function App() {
  return (
    <div className="App">
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
    </div>
  );
}*/

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App;
