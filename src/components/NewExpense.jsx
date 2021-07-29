import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
	const {
		onAddExpense,
	} = props

	const onAddExpenseHandler = (expense) => {
		const newExpense = {
			...expense,
			id: Math.random().toString(36).substr(2, 9),
		}
		onAddExpense(newExpense)
	}
  return (
		<div className='new-expense'>
			<ExpenseForm onAddExpense={onAddExpenseHandler} />
		</div>
	)
} 

export default NewExpense