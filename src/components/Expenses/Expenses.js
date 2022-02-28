import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../Filter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    //const [filteredExpenses, setFilteredExpenses] = useState(props.items)

    const filterChangeHangler = (selectedYear) => {
        setFilteredYear(selectedYear);
        //setFilteredExpenses(props.items.filter((expense) => expense.date.getFullYear().toString() === selectedYear))
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onSelectedFilter={filterChangeHangler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};
export default Expenses;
