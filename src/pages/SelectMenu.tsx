import { useState } from "react";
import { Book, Movie, Phone, Select } from "../components/Select";

//const assertion
// turn into read-only of these specific values
// const tabs = ["Books", "Movies", "Laptops", "Phones"] as const;

// type Tabs = typeof tabs;
// type Tab = Tabs[number];

// enums implementation

enum Tabs {
  "BOOKS" = "Books",
  "MOVIES" = "Movies",
  "LAPTOPS" = "Laptops",
  "PHONES" = "Phones",
}

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

const getSelect = (tab: Tabs) => {
  switch (tab) {
    case Tabs.BOOKS:
      return (
        <Select<Book>
          values={bookOptions}
          onChange={(book) => doSomethingWithBooks(book)}
        />
      );

    case Tabs.MOVIES:
      return (
        <Select
          values={movieOptions}
          onChange={(movie) => doSomethingWithMovies(movie)}
        />
      );

    case Tabs.LAPTOPS:
      return (
        <Select
          values={movieOptions}
          onChange={(movie) => doSomethingWithMovies(movie)}
        />
      );
    case Tabs.PHONES:
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
  const [tab, setTab] = useState<Tabs>(Tabs.BOOKS);

  const select = getSelect(tab);
  return (
    <>
      <Select<Tabs>
        values={Object.values(Tabs)}
        onChange={(val) => {
          setTab(val);
        }}
      />
      {select}
    </>
  );
}
