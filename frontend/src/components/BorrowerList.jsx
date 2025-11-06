import { useEffect, useState } from "react";
import api from "../services/api";

function BorrowerList() {
  const [borrowers, setBorrowers] = useState([]);

  useEffect(() => {
    api.get("borrowers/")
      .then((res) => setBorrowers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2>Borrowed Books</h2>
      <ul>
        {borrowers.map((b) => (
          <li key={b.id}>
            {b.name} borrowed <strong>{b.book.title}</strong> on {b.borrowed_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BorrowerList;
