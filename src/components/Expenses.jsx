import { useState } from 'react'
import Card from './Card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
  const {
    items
  } = props

  const [year, setYear] = useState('2021')

  const onSelectYearHandler = (year) => {
    setYear(year)
  }

  const expensesByYear = items.filter((expense) => {
    return expense.date.getFullYear() === parseInt(year)
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={year} onSelectYear={onSelectYearHandler}/>
        <ExpensesList expenses={expensesByYear} />
      </Card>
    </div>
	)
}

export default Expenses