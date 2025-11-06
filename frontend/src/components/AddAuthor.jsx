import { useState } from "react";
import api from "../services/api";

function AddAuthor() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("authors/", { name, email });
      alert("Author added successfully!");
      setName("");
      setEmail("");
    } catch (error) {
      alert("Error adding author!");
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <h2>Add Author</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Author Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Author Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit">Add Author</button>
      </form>
    </div>
  );
}

export default AddAuthor;
