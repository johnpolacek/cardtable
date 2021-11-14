const BasicExampleCode = `import React, { useState } from "react"
import CardTable from "../CardTable"

const BasicExample = () => {
  // Typically this would be data returned from an api
  const data = [
    {
      id: 1,
      status: "⚡ Live",
      name: "Spaceship",
      category: "space",
      cost: "$100",
      departure: "08/01/2023",
      capacity: 5,
    },
    {
      id: 2,
      status: "⚡ Live",
      name: "Bicycle",
      category: "ground",
      cost: "$5",
      departure: "08/01/2023",
      capacity: 2,
    },
    {
      id: 3,
      status: "🔜 Soon",
      name: "Teleporter",
      category: "instant",
      cost: "$1,000,000",
      departure: "08/01/3023",
      capacity: 1,
    },
  ]
  
  // These are column headers for each property key in the data
  // It is required that:
  // - the data is an array of objects
  // - the objects have the same shape
  // - the number of keys in the object equal the number of columns

  const columns = [
    "Id",
    "Status",
    "Vehicle",
    "Category",
    "Cost per Trip",
    "Departure",
    "Capacity",
  ]

  return (
    <CardTable
      id="BasicExampleTable"
      columns={columns}
      data={data}
      gridTemplateColumns="1fr 2fr 2fr 2fr 2fr 2fr 2fr"
    />
  )
}

export default BasicExample
`

export default BasicExampleCode
