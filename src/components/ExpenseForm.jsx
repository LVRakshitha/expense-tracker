import React, { useState, useEffect } from "react";

function ExpenseForm({ addExpense, editingExpense, updateExpense, cancelEdit }) {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  useEffect(() => {
    if (editingExpense) {
      setExpense(editingExpense);
    }
  }, [editingExpense]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingExpense) {
      updateExpense(expense);
    } else {
      addExpense({ ...expense, id: Date.now() });
    }

    setExpense({ title: "", amount: "", category: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={expense.title}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={expense.amount}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={expense.category}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={expense.date}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingExpense ? "Update" : "Add"}</button>
      {editingExpense && (
        <button type="button" onClick={cancelEdit} className="delete">
          Cancel
        </button>
      )}
    </form>
  );
}

export default ExpenseForm;
