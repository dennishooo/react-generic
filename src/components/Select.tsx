import React from "react";

export type Base =
  | {
      id: string;
    }
  | string;

export type Book = {
  id: string;
  title: string;
  author: string; // only books have it
};

export type Movie = {
  id: string;
  title: string;
  releaseDate: string; // only movies have it
};

export type Phone = {
  id: string;
  brand: string;
  price: number; // only movies have it
};

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps<TValue> = {
  titleKey?: keyof TValue;
  values: TValue[];
  onChange: (value: TValue) => void;
};

export function isStringValue<TValue>(value: TValue | string): value is string {
  return typeof value === "string";
}

// this is not working for typescript as it only regard it as a boolean value
// export function isStringValueV2<TValue>(value: TValue | string): boolean {
//     return typeof value === "string";
//   }

function getStringFromValue<TValue extends Base>(value: TValue) {
  //type guard
  if (isStringValue(value)) return value;
  return value.id;
}

export type DataType = Book | Movie | Phone | string;

function isBook(value: DataType): value is Book {
  return typeof value !== "string" && "id" in value && "author" in value;
}

function isMovie(value: DataType): value is Movie {
  return typeof value !== "string" && "id" in value && "releaseDate" in value;
}

function isBrand(value: DataType): value is Phone {
  return typeof value !== "string" && "id" in value && "brand" in value;
}

function valueShoudBeString(value: string): string {
  return value;
}
function formatLabel(value: DataType) {
  if (isBook(value)) return value.author;
  if (isMovie(value)) return value.releaseDate;
  if (isBrand(value)) return value.brand;

  //exhaustiveness checking
  return valueShoudBeString(value);
}

export function Select<TValue extends Base>({
  values,
  //   titleKey = "title",
  onChange,
}: SelectProps<TValue>) {
  return (
    <select
      onChange={(e) => {
        let value = values.find(
          (val: TValue) => getStringFromValue(val) === e.target.value
        );
        if (value) onChange(value);
      }}
    >
      {values.map((value: TValue) => (
        <option
          key={getStringFromValue(value)}
          value={getStringFromValue(value)}
        >
          {formatLabel(value)}
          {/* {value[titleKey] ? value[titleKey] : value} */}
        </option>
      ))}
    </select>
  );
}
