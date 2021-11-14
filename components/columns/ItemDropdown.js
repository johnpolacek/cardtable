import React, { useEffect, useRef } from "react"

const ItemDropdown = ({ id, onAddToCount, activeItem, onToggle }) => {
	const isActive = activeItem === id
	const dropdownRef = useRef(null)
	useEffect(() => {
		if (isActive) {
			dropdownRef.current.focus()
		}
	}, [isActive])

	return (
		<div className="relative">
			<button
				onClick={() => {
					onToggle({ id, isActive })
				}}
				data-id={id}
				className="bg-gray-200 font-bold px-4 md:px-2 pb-1 rounded"
				aria-label="Open dropdown options"
			>
				<span className="relative -top-1">...</span>
			</button>
			<div
				ref={dropdownRef}
				className={
					(isActive ? "" : "hidden ") +
					"w-36 mx-auto text-center left-3 px-2 md:absolute bg-white text-base z-50 md:float-left py-2 list-none text-left rounded shadow-md border mt-1"
				}
				id="dropdown"
			>
				<button
					onClick={() => onAddToCount(id)}
					className="hover:bg-gray-100 p-2"
				>
					+ Add to Count
				</button>
			</div>
		</div>
	)
}

export default ItemDropdown
