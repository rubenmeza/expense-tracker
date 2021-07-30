import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
	const {
		onAddExpense,
	} = props

	const [showForm, setShowForm] = useState(false)

	const onAddExpenseHandler = (expense) => {
		const newExpense = {
			...expense,
			id: Math.random().toString(36).substr(2, 9),
		}
		onAddExpense(newExpense)
	}

	const startEditingHandlerrr = () => {
		setShowForm(true)
	}

	const stopEditingHandler = () => {
		setShowForm(false)
	}

  return (
		<div className='new-expense'>
			{!showForm && <button type='button' onClick={startEditingHandlerrr}>Add New Expense</button>}
			{showForm && <ExpenseForm onAddExpense={onAddExpenseHandler} onCancel={stopEditingHandler} />}
		</div>
	)
} 

export default NewExpense