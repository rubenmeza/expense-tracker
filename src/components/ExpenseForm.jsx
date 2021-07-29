import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
	const {
		onAddExpense,
	} = props

	const [expense, setExpense] = useState({
		title: '',
		amount: '',
		date: ''
	})

	const titleChangeHandler = (event) => {
		setExpense((prevState) => {
			return {
				...prevState,
				title: event.target.value
			}
		})
	}
	const amountChangeHandler = (event) => {
		setExpense((prevState) => {
			return {
				...prevState,
				amount: event.target.value
			}
		})
	}
	const dateChangeHandler = (event) => {
		setExpense((prevState) => {
			return {
				...prevState,
				date: new Date(event.target.value)
			}
		})
	}

	const submitHandler = (event) => {
		event.preventDefault()
		onAddExpense(expense)
		setExpense({
			title: '',
			amount: '',
			date: ''
		})
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={expense.title} onChange={titleChangeHandler}/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' value={expense.amount} onChange={amountChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' value={expense.date} onChange={dateChangeHandler} />
				</div>
			</div>
			<div className='new_expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm