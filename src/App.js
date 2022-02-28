import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'Car Insurance',
    amount: 115.23,
    date: new Date(2021, 2, 21)
  },
  {
    id: 2,
    title: 'Cellphone Contract',
    amount: 1023.99,
    date: new Date(2021, 6, 23)
  },
  {
    id: 3,
    title: 'Car Installment',
    amount: 7454.99,
    date: new Date(2021, 1, 29)
  },
  {
    id: 4,
    title: 'Groceries',
    amount: 1500.00,
    date: new Date(2021, 3, 15)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;