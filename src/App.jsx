import Expenses from "./components/Expenses"

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

  return (
    <div>
      <h2>Let 's get started!</h2>
      <Expenses items={expenses} />
    </div>
  )
}

export default App