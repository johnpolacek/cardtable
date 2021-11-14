import React, { useState } from "react"
import CardTable from "../CardTable"
import getColumns from "./getColumns" // custom column rendering function
import renderRows from "./renderRows" // custom rows rendering function to add custom card styling
import data from "./placeholderData" // typically this would come from an api

const CustomCardExample = () => {
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
			id="CustomCardExampleTable"
			columns={getColumns({
				onAddToCount,
				activeItem,
				onToggleDropdown,
			})}
			renderRows={renderRows}
			data={itemData}
			gridTemplateColumns="1fr 2fr 4fr 3fr 3fr 2fr 2fr 2fr 2fr"
			label="Custom Card Example"
		/>
	)
}

export default CustomCardExample
