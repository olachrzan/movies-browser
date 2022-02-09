import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { MovieDetailsPage } from "./features/movies/MovieDetails/MovieDetailsPage";
import { MovieList } from "./features/movies/MovieList";
import { Header } from "./common/Header";
import { PeopleListPage } from "./features/people/peopleList/peopleListPage";

function App() {

  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/movie/:id" >
          <MovieDetailsPage />
        </Route>
        <Route path="/movie">
          <MovieList />
        </Route >
        <Route path="/people/:id" >
        </Route>
        <Route path="/people">
          <PeopleListPage />
        </Route >
        <Route path="/">
          <Redirect to="/movie" />
        </Route>
      </Switch>
    </HashRouter >
  );
};

export default App;