import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { MovieList } from "./features/movies/MovieList";
import { MovieDetailsPage } from "./features/movies/MovieDetails/MovieDetailsPage";
import { Header } from "./common/Header";
import { PeopleListPage } from "./features/people/peopleList/peopleListPage";
import { PeopleDetailsPage } from "./features/people/peopleDetails/PeopleDetailsPage";

function App() {

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/movie" element={<MovieList />} />
        <Route path="/people/:id" element={<PeopleDetailsPage />} />
        <Route path="/people" element={<PeopleListPage />} />
        <Route path="/" element={<Navigate to="/movie" />} />
      </Routes>
    </HashRouter >
  );
};

export default App;