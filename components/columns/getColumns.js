import ItemDropdown from "./ItemDropdown"

const getColumns = ({ activeItem, onToggleDropdown, onAddToCount }) => [
	{
		label: "",
		render: (id) => (
			<ItemDropdown
				id={id}
				onToggle={onToggleDropdown}
				onAddToCount={onAddToCount}
				activeItem={activeItem}
			/>
		),
	},
	{
		label: "Status",
		render: (status) => <div className="font-mono text-gray-700">{status}</div>,
	},
	{
		label: "Vehicle",
		render: ({ name, category, link, icon }) => (
			<div className="flex flex-wrap">
				<div
					aria-hidden="true"
					className="text-3xl p-2 border md:ml-2 mr-2 md:mr-4"
				>
					{icon}
				</div>
				<div className="text-left pt-1">
					<p>
						<a href={link} className="text-blue-900 italic">
							{name}
						</a>
					</p>
					<p className="text-sm text-gray-600">{category}</p>
				</div>
			</div>
		),
	},
	{
		label: "Cost per Trip",
	},
	{
		label: "Departure",
	},
	{
		label: "Count",
	},
]

export default getColumns
