import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (date) => {
    setFilteredYear(date);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </div>
    </>
  );
};

export default Expenses;