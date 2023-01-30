export function identity<Type>(a: Type): Type {
  return a;
}

const a = identity<string>("abc");

type People = {
  firstName: string;
  lastName: string;
};

type Haha = keyof People;

let b: Haha = "firstName";

console.log(b);

b = "dsd";
