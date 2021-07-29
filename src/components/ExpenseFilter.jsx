import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
	const {
		selected,
		onSelectYear,
	} = props

	const selectYearHandler = (event) => {
		onSelectYear(event.target.value)
	}

  return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select value={selected} onChange={selectYearHandler}>
					<option value='2021'>2021</option>
					<option value='2022'>2022</option>
					<option value='2023'>2023</option>
					<option value='2024'>2024</option>
				</select>
			</div>
		</div>
	)
}

export default ExpenseFilter