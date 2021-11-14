const CustomExampleCodeColumn1 = `import ItemDropdown from "./ItemDropdown"

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
`

export default CustomExampleCodeColumn1
