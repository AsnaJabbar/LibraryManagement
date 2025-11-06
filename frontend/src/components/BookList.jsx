import { useEffect, useState } from "react";
import api from "../services/api";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("books/")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2>Available Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> — {book.author.name}
            <br />
            Copies: {book.available_copies}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
