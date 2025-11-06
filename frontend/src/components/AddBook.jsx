import { useEffect, useState } from "react";
import api from "../services/api";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [availableCopies, setAvailableCopies] = useState("");
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    api.get("authors/").then((res) => setAuthors(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("books/", {
        title,
        author_id: author,
        published_date: publishedDate,
        available_copies: availableCopies,
      });
      alert("Book added successfully!");
      setTitle("");
      setAuthor("");
      setPublishedDate("");
      setAvailableCopies("");
    } catch (error) {
      alert("Error adding book!");
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />

        <select value={author} onChange={(e) => setAuthor(e.target.value)} required>
          <option value="">Select Author</option>
          {authors.map((a) => (
            <option key={a.id} value={a.id}>
              {a.name}
            </option>
          ))}
        </select>
        <br />

        <input
          type="date"
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          required
        />
        <br />

        <input
          type="number"
          placeholder="Available Copies"
          value={availableCopies}
          onChange={(e) => setAvailableCopies(e.target.value)}
          required
        />
        <br />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
