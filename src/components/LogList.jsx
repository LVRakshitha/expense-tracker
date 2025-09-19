// LogList.jsx
import React from "react";
import { FaEdit } from "react-icons/fa";

function LogList({ logs, editExpense }) {
  return (
    <div>
      {logs.length === 0 && <p>No logs yet.</p>}
      {logs.map((log, index) => (
        <div key={index} className="log-card">
          <div>
            <p><strong>Title:</strong> {log.title}</p>
            <p><strong>Amount:</strong> ₹{log.amount}</p>
            <p><strong>Time:</strong> {new Date(log.time).toLocaleString()}</p>
          </div>
          <FaEdit
            className="icon edit-icon"
            onClick={() => editExpense(log)}
          />
        </div>
      ))}
    </div>
  );
}

export default LogList;
