import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import LogList from "./components/LogList";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [total, setTotal] = useState(100000);
  const [logs, setLogs] = useState([
    { id: 1, title: "Pizza", amount: 300, category: "Food", action: "CREATE", time: Date.now() },
    { id: 2, title: "Shirt", amount: 1200, category: "Clothes", action: "CREATE", time: Date.now() },
    { id: 3, title: "Bus Ticket", amount: 80, category: "Travel", action: "CREATE", time: Date.now() },
  ]);

  const [started, setStarted] = useState(false);

  const addExpense = (exp) => {
    setExpenses([...expenses, exp]);
    setLogs([{ ...exp, action: "CREATE", time: Date.now() }, ...logs]);
    setTotal(total - Number(exp.amount));
  };

  const editExpense = (exp) => setEditingExpense(exp);

  const updateExpense = (updated) => {
    setExpenses(expenses.map((e) => (e.id === updated.id ? updated : e)));
    setLogs([{ ...updated, action: "UPDATE", time: Date.now() }, ...logs]);
    setEditingExpense(null);
  };

  const cancelEdit = () => setEditingExpense(null);

  // Graph data grouped by category
  const graphData = Object.values(
    logs.reduce((acc, log) => {
      if (!acc[log.category]) acc[log.category] = { category: log.category, amount: 0 };
      acc[log.category].amount += Number(log.amount);
      return acc;
    }, {})
  );

  return (
    <>
      {!started ? (
        <LandingPage onStart={() => setStarted(true)} />
      ) : (
        <div className="app-container" style={{ display: "flex" }}>
          <NavBar setPage={() => setStarted(true)} /> {/* just toggle started */}

          <div className="main-content" style={{ flex: 1, padding: "20px" }}>
            <div className="main-container">
              {/* LEFT: Total + Expense Form */}
              <div className="left-section">
                <div className="total-section">
                  <h1>Total Balance: ₹{total}</h1>
                </div>

                <div className="form-section">
                  <h2>Add Expense</h2>
                  <ExpenseForm
                    addExpense={addExpense}
                    editingExpense={editingExpense}
                    updateExpense={updateExpense}
                    cancelEdit={cancelEdit}
                  />
                </div>
              </div>

              {/* RIGHT: Graph */}
              <div className="graph-section">
                <h2>Transaction Graph</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={graphData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#4CAF50" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Logs below */}
            <div className="logs-section">
              <h2>Transaction Logs</h2>
              <LogList logs={logs} editExpense={editExpense} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
















































