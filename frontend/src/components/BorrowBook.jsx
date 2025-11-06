import { useEffect, useState } from "react";
import api from "../services/api";

function BorrowBook() {
  const [books, setBooks] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [book, setBook] = useState("");
  const [borrowedDate, setBorrowedDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  useEffect(() => {
    api.get("books/").then((res) => setBooks(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("borrowers/", {
        name,
        email,
        book_id: book,
        borrowed_date: borrowedDate,
        return_date: returnDate,
      });
      alert("Book borrowed successfully!");
      setName("");
      setEmail("");
      setBook("");
      setBorrowedDate("");
      setReturnDate("");
    } catch (error) {
      alert("Error borrowing book! Check available copies.");
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <h2>Borrow Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Borrower Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Borrower Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <select value={book} onChange={(e) => setBook(e.target.value)} required>
          <option value="">Select Book</option>
          {books.map((b) => (
            <option key={b.id} value={b.id}>
              {b.title} ({b.available_copies} copies)
            </option>
          ))}
        </select>
        <br />
        <input
          type="date"
          value={borrowedDate}
          onChange={(e) => setBorrowedDate(e.target.value)}
          required
        />
        <br />
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          required
        />
        <br />
        <button type="submit">Borrow</button>
      </form>
    </div>
  );
}

export default BorrowBook;
