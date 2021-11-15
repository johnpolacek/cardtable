import React, { useState } from "react"
import CardTable from "../CardTable"
import getColumns from "./getColumns" // custom column rendering function
import data from "./placeholderData" // typically this would come from an api

const CustomColumnsExample = () => {
	const [itemData, setItemData] = useState(data)
	const [activeItem, setActiveItem] = useState(null)

	const onToggleDropdown = ({ id, isActive }) => {
		setActiveItem(isActive ? null : id)
	}

	const onAddToCount = (id) => {
		var newData = itemData.map((item) =>
			item.id === id ? { ...item, count: item.count + 1 } : item
		)
		setItemData(newData)
	}

	return (
		<CardTable
			id="CustomColumnsExampleTable"
			columns={getColumns({
				onAddToCount,
				activeItem,
				onToggleDropdown,
			})}
			data={itemData}
			gridTemplateColumns="1fr 2fr 4fr 3fr 3fr 2fr"
			tableClasses="block text-center"
			label="Custom Columns CardTable Example"
		/>
	)
}

export default CustomColumnsExample
