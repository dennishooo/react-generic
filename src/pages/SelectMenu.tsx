import { useState } from "react";
import { Book, Movie, Select } from "../components/Select";

//const assertion
// turn into read-only of these specific values
const tabs = ["Books", "Movies", "Laptops"] as const;

type Tabs = typeof tabs;
type Tab = Tabs[number];

const bookOptions: Book[] = [{ id: "1", title: "fml", author: "alex" }];
const movieOptions: Movie[] = [
  { id: "1", title: "titanics", releaseDate: "1999-12-01" },
];
const doSomethingWithBooks = (book: Book) => {};
const doSomethingWithMovies = (movie: Movie) => {};

const getSelect = (tab: string) => {
  switch (tab) {
    case "Books":
      return (
        <Select<Book>
          values={bookOptions}
          onChange={(book) => doSomethingWithBooks(book)}
        />
      );

      break;
    case "Movies":
      return (
        <Select
          values={movieOptions}
          onChange={(movie) => doSomethingWithMovies(movie)}
        />
      );
      break;
    case "Laptops":
      return <></>;
      break;

    default:
      break;
  }
};

export default function SelectMenu() {
  const [tab, setTab] = useState<string>(tabs[0]);

  const select = getSelect(tab);
  return (
    <>
      <Select<Tab>
        values={tabs}
        onChange={(val) => {
          setTab(val);
        }}
      />
      {select}
    </>
  );
}
