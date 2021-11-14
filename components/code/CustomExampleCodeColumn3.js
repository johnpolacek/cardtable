const CustomExampleCodeColumn3 = `{
  label: "Vehicle",
  render: ({ name, category, link, icon }) => (
    <div className="flex flex-wrap">
      <div className="text-3xl p-2 border md:ml-2 mr-2 md:mr-4">{icon}</div>
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
}
`

export default CustomExampleCodeColumn3
