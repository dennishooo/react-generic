import { useState } from "react";
import { Book, Movie, Select } from "./components/Select";
import SelectMenu from "./pages/SelectMenu";

function App() {
  const bookOptions: Book[] = [{ id: "1", title: "fml", author: "alex" }];
  const movieOptions: Movie[] = [
    { id: "1", title: "titanics", releaseDate: "1999-12-01" },
  ];
  const doSomethingWithBooks = (book: Book) => {};
  const doSomethingWithMovies = (movie: Movie) => {};

  return (
    <div>
      <SelectMenu />
    </div>
  );
}

export default App;
