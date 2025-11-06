import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import AddAuthor from "./components/AddAuthor";
import AddBook from "./components/AddBook";
import BorrowBook from "./components/BorrowBook";
import BorrowerList from "./components/BorrowerList";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Books</Link> |{" "}
        <Link to="/add-author">Add Author</Link> |{" "}
        <Link to="/add-book">Add Book</Link> |{" "}
        <Link to="/borrow">Borrow Book</Link> |{" "}
        <Link to="/borrowers">Borrowers</Link>
      </nav>

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add-author" element={<AddAuthor />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/borrow" element={<BorrowBook />} />
        <Route path="/borrowers" element={<BorrowerList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
