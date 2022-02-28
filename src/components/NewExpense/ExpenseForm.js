import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // const [userTitle, setItemTitle] = useState('');
    // const [userAmount, setItemAmount] = useState('');
    // const [userDate, setItemDate] = useState('');

    const [userInputs, setUserInputs] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });


    const titleChangeHandeler = (event) => {
        // setUserInputs({
        //     ...userInputs, enteredTitle: event.target.value
        // })

        setUserInputs((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        })
    }

    const amountChangeHandler = (event) => {
        // setUserInputs({
        //     ...userInputs, enteredAmount: event.target.value
        // })

        setUserInputs((prevState) => {
            return { ...prevState, enteredAmount: event.target.value }
        })
    }

    const dateChangeHandeler = (event) => {
        // setUserInputs({
        //     ...userInputs, enteredDate: event.target.value
        // })

        setUserInputs((prevState) => {
            return { ...prevState, enteredDate: event.target.value }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInputs.enteredTitle,
            amount: +userInputs.enteredAmount,
            date: new Date(userInputs.enteredDate)
        }

        console.log(expenseData)
        props.onSaveExpenseData(expenseData)
        setUserInputs((prevState) => {
            return {
                ...prevState,
                enteredTitle: '',
                enteredAmount: '',
                enteredDate: ''
            }
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInputs.enteredTitle} onChange={titleChangeHandeler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInputs.enteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={userInputs.enteredDate} onChange={dateChangeHandeler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}


export default ExpenseForm
