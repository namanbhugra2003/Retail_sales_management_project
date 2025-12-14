import { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { fetchSales } from "../services/salesApi";

export default function TransactionsTable({ query }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchSales(query).then((res) => setRows(res.data || []));
  }, [query]);

  if (rows.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Date</th>
          <th>Customer ID</th>
          <th>Customer Name</th>
          <th>Phone Number</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Product Category</th>
          <th>Quantity</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td>{r["Transaction ID"] ?? "-"}</td>

            <td>
              {r.Date
                ? new Date(r.Date).toISOString().split("T")[0]
                : "-"}
            </td>

            <td>{r["Customer ID"] ?? "-"}</td>
            <td>{r["Customer Name"] ?? "-"}</td>

            <td>
              {r["Phone Number"] ? `+91 ${r["Phone Number"]}` : "-"}
              {r["Phone Number"] && (
                <FiCopy
                  className="copy-icon"
                  onClick={() =>
                    navigator.clipboard.writeText(`+91 ${r["Phone Number"]}`)
                  }
                />
              )}
            </td>

            <td>{r.Gender ?? "-"}</td>
            <td>{r.Age ?? "-"}</td>

            <td>
              <strong>{r["Product Category"] ?? "-"}</strong>
            </td>

            <td>
              <strong>{r.Quantity ?? "-"}</strong>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
