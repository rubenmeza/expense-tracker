import Expenses from "./components/Expenses"
import NewExpense from "./components/NewExpense"

const App = () => {
  const expenses = [
    {
      id: 1,
      title: 'Toilet Paper',
      amount: 94.12, 
      date: new Date(2021, 7, 1)
    },
    {
      id: 2,
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 4, 30)
    },
    {
      id: 3,
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 6, 14)
    },
    {
      id: 4,
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    },
  ]

  const addExpenseHandler = (expense) => {
    console.log('In App.jsx')
    console.log(expense)
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