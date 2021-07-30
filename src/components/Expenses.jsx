import { useState } from 'react'
import Card from './Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

import './Expenses.css'

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
        <ExpensesChart expenses={expensesByYear} />
        <ExpensesList expenses={expensesByYear} />
      </Card>
    </div>
	)
}

export default Expenses