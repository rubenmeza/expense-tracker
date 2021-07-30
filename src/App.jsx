import { useState } from 'react'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: Math.random().toString(36).substr(2, 9),
    title: 'Toilet Paper',
    amount: 94.12, 
    date: new Date(2021, 7, 1)
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 4, 30)
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    title: 'New TV',
    amount: 799.49,
    date: new Date(2023, 6, 14)
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  },
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <h2>Let 's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App