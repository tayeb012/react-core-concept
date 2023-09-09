import "./book.css";

export default function Book({ Book }) {
  console.log(Book);
  const { name, price } = Book;
  return (
    <>
      <div className="book">
        <h1>
          Book Name: {name} price: {price}
        </h1>
      </div>
    </>
  );
}
