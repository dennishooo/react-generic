import { useState } from "react";
import { Book, Movie, Phone, Select } from "../components/Select";

//const assertion
// turn into read-only of these specific values
const tabs = ["Books", "Movies", "Laptops", "Phones"] as const;

type Tabs = typeof tabs;
type Tab = Tabs[number];

const bookOptions: Book[] = [{ id: "1", title: "fml", author: "alex" }];
const movieOptions: Movie[] = [
  { id: "1", title: "titanics", releaseDate: "1999-12-01" },
];

const phoneOptions: Phone[] = [
  { id: "1", brand: "apple", price: 8000 },
  { id: "2", brand: "samsung", price: 5000 },
  { id: "3", brand: "nokia", price: 5 },
];
const doSomethingWithBooks = (book: Book) => {};
const doSomethingWithMovies = (movie: Movie) => {};
const doSomethingWithPhones = (phone: Phone) => {};

// exhaustiveness checking
const confirmImpossibleState = (tab: never) => {
  throw new Error(`reaching an impossible state becase of ${tab}`);
};

const getSelect = (tab: Tab) => {
  switch (tab) {
    case "Books":
      return (
        <Select<Book>
          values={bookOptions}
          onChange={(book) => doSomethingWithBooks(book)}
        />
      );

    case "Movies":
      return (
        <Select
          values={movieOptions}
          onChange={(movie) => doSomethingWithMovies(movie)}
        />
      );

    case "Laptops":
      return (
        <Select
          values={movieOptions}
          onChange={(movie) => doSomethingWithMovies(movie)}
        />
      );
    case "Phones":
      return (
        <Select
          values={phoneOptions}
          onChange={(phone) => doSomethingWithPhones(phone)}
        />
      );
    default:
      confirmImpossibleState(tab);
      break;
  }
};

export default function SelectMenu() {
  const [tab, setTab] = useState<Tab>(tabs[0]);

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
