import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { MovieList } from "./features/movies/MovieList";
import { Header } from "./common/Header";
import { PeopleListPage } from "./features/people/peopleList/peopleListPage";

function App() {

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/movie/:id" />
        <Route path="/movie" element={<MovieList />} />
        <Route path="/people/:id" />
        <Route path="/people" element={<PeopleListPage />} />
        <Route path="/" element={<Navigate to="/movie" />} />
      </Routes>
    </HashRouter >
  );
};

export default App;