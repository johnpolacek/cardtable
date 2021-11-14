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
			<div className="flex flex-wrap justify-center md:justify-start w-full">
				<div
					aria-hidden="true"
					className="text-3xl md:p-2 md:border md:ml-2 mr-2 md:mr-4"
				>
					{icon}
				</div>
				<div className="text-center md:text-left pt-1">
					<p>
						<a
							href={link}
							className="text-2xl md:text-base font-bold md:font-semibold text-blue-900 italic"
						>
							{name}
						</a>
					</p>
					<p className="text-sm text-gray-600 italic">{category}</p>
				</div>
			</div>
		),
	},
	{
		label: "Cost per Trip",
	},
	{
		label: "Rating",
	},
	{
		label: "Surcharge",
	},
	{
		label: "Departure",
	},
	{
		label: "Arrival",
	},
	{
		label: "Count",
	},
]

export default getColumns
