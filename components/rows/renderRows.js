// renderRows is a function that maps data to table rows, each of which is a collection of table cells
// grid-cols-2 produces "this: that" format for small screen sizes
// md:grid-cols-1 makes this act like a table cell for md+ screen sizes

// how can we make the small screen styles organize these cells within their row? (each row is a card - display:block)

const renderRows = ({ data, columns, gridTemplateColumns }) => (
  <>
    {data.map((row, rowIndex) => {
      if (Object.keys(row).length !== columns.length) {
        throw new ReferenceError(
          "ReferenceError: The number of columns (" +
            columns.length +
            ") and the number of keys (" +
            Object.keys(row).length +
            ") in the row do not match, resulting in an undefined value."
        )
      }

      return (
        <tr
          className={
            "relative max-w-480 md:max-w-none mx-auto block w-full md:grid grid-flow-col py-3 md:py-0 border md:border-0 mb-6 md:mb-0 shadow-md md:shadow-none rounded md:rounded-none" +
            (rowIndex > 0 ? " md:border-t" : "")
          }
          style={{ gridTemplateColumns }}
        >
          {Object.keys(row).map((key, colIndex) => {
            let cellClassName =
              "grid grid-flow-col grid-cols-2 items-center h-full md:grid-cols-1 p-2 grid-cols-2 md:border-l"
            let labelClassName = "md:sr-only font-semibold text-left pl-16 pr-2"
            let valueClassName = "pl-6 md:p-0 text-left md:text-center"
            if (key === "id") {
              cellClassName = "grid items-center h-full px-4 md:px-0 pt-2"
              valueClassName = "pl-2 md:p-0 text-left md:text-center"
            }
            if (key === "status") {
              cellClassName =
                "grid grid-flow-col grid-cols-1 items-center h-full grid-cols-2 md:border-l"
              labelClassName = "sr-only"
              valueClassName =
                "pt-5 pr-8 md:p-0 absolute top-0 right-0 md:static md:text-center font-bold md:font-normal text-xl md:text-base"
            }
            if (key === "data") {
              cellClassName =
                "-mt-3 mb-1 md:m-0 grid grid-flow-col grid-cols-1 items-center h-full p-2 grid-cols-2 md:border-l"
              labelClassName = "sr-only"
              valueClassName = ""
            }
            if (key === "count") {
              cellClassName =
                "grid grid-flow-col grid-cols-2 items-center h-full md:grid-cols-1 grid-cols-2 border-l pb-6"
            }

            return (
              <td
                className={cellClassName}
                key={"row-" + rowIndex + "-col-" + colIndex}
                title={typeof row[key] === "string" ? row[key] : ""}
              >
                <div className={labelClassName}>{columns[colIndex].label}</div>
                <div className={valueClassName}>
                  {columns[colIndex].render
                    ? columns[colIndex].render(row[key])
                    : row[key]}
                </div>
              </td>
            )
          })}
        </tr>
      )
    })}
  </>
)

export default renderRows
