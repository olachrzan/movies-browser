import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import {MovieDetailsPage} from "./features/movies/MovieDetails/MovieDetailsPage";
import { MovieList } from "./features/movies/MoviesList";

function App() {

  return (
    <HashRouter>
      <Switch>
        <Route path="/movie/:id" >
          <MovieDetailsPage />
        </Route>
        <Route path="/movie">
          <MovieList />
        </Route >
        <Route path="/">
          <Redirect to="/movie" />
        </Route>
      </Switch>
    </HashRouter >
  );
};

export default App;
