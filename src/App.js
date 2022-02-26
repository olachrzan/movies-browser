import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { MovieList } from "./features/movies/MovieList";
import { MovieDetails } from "./features/movies/MovieDetails";
import { Header } from "./common/Header";
import { PeopleDetailsPage } from "./features/people/peopleDetails/PeopleDetailsPage";
import { PeopleList } from "./features/people/peopleList";

function App() {

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie" element={<MovieList />} />
        <Route path="/people/:id" element={<PeopleDetailsPage />} />
        <Route path="/people" element={<PeopleList />} />
        <Route path="/" element={<Navigate to="/movie" />} />
      </Routes>
    </HashRouter >
  );
};

export default App;