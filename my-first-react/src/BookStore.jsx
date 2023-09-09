import Book from "./book";
export default function BookStore({ books }) {
  //   console.log(books[0].price);
  return (
    <>
      <h2>Books: {books.length}</h2>
      {books.map((book) => (
        <Book Book={book}></Book>
      ))}
    </>
  );
}
