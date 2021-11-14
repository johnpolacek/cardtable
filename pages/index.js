import Head from "next/head"
import CodeBlock from "../components/code/CodeBlock"
import BasicExample from "../components/basic/BasicExample"
import CustomColumnsExample from "../components/columns/CustomColumnsExample"
import CustomCardExample from "../components/rows/CustomCardExample"
import BasicExampleCode from "../components/code/BasicExampleCode"
import CustomExampleCode from "../components/code/CustomExampleCode"
import CustomExampleCodeColumn1 from "../components/code/CustomExampleCodeColumn1"
import CustomExampleCodeColumn2 from "../components/code/CustomExampleCodeColumn2"
import CustomExampleCodeColumn3 from "../components/code/CustomExampleCodeColumn3"
import CustomExampleRowData from "../components/code/CustomExampleRowData"
import RenderRowsCode from "../components/code/RenderRowsCode"

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>CardTable</title>
				<meta
					name="description"
					content="A responsive table component with CSS Grid, React and Tailwind CSS."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 p-4 md:px-20 text-center">
				<section className=" p-4" aria-label="Introduction">
					<h1 className="text-4xl md:text-6xl font-bold pt-4">CardTable</h1>

					<p className="mt-3 text-lg  md:text-2xl px-4">
						A responsive table component with CSS Grid, React and Tailwind CSS.
					</p>

					<div className="my-12 w-full max-w-5xl">
						<CustomCardExample />
					</div>

					<div className="mb-20 hidden md:block flex flex-col">
						<button
							onClick={() => {
								window.open(
									document.location.href,
									"targetWindow",
									"width=360,height=640"
								)
							}}
							className="blox mx-auto w-64 bg-gray-200 rounded px-3 py-2 text-lg mb-4"
						>
							<span aria-hidden="true">↖️</span> View Small Screen Size
						</button>
						<a
							href="https://github.com/johnpolacek/stacktable"
							className="block mx-auto w-64 bg-gray-200 rounded px-3 py-3 text-lg"
						>
							<img
								className="inline mr-2 -mt-1"
								width="20"
								src="/images/github.svg"
								alt=""
								aria-hidden="true"
							/>
							View Source on Github
						</a>
					</div>
				</section>
				<section
					aria-label="Documentation"
					className="border-t p-4 md:p-16 text-left w-full max-w-5xl"
				>
					<p className="pb-6">
						A <strong>CardTable</strong> is a table component that renders as an
						ordinary table on larger screensizes and as a collection of cards at
						smaller screensizes.
					</p>
					<h3 className="block pt-6 text-xl font-bold">Basic Example</h3>
					<div className="my-6 w-full max-w-5xl">
						<BasicExample />
					</div>
					<CodeBlock>{BasicExampleCode}</CodeBlock>
					<p className="pb-3">
						This basic example consumes data and formats it according to the
						array of column headers defined by the <code>columns</code> prop.
					</p>
					<p>
						Take note of the <code>gridTemplateColumns</code> prop. That is
						where we define the styles for the grid that manages the alignment
						of the table at larger screen sizes. See the{" "}
						<a
							className="text-blue-600 bold underline"
							href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
						>
							MDN Web Docs
						</a>{" "}
						for more information.
					</p>
					<h3 className="block pt-12 text-xl font-bold">
						Custom Columns Example
					</h3>
					<div className="my-6 w-full max-w-5xl">
						<CustomColumnsExample />
					</div>
					<p className="pb-3">
						Like the basic example. this example consumes data and formats it.
						However, this time we have a custom function for the columns. Let’s
						take a look!
					</p>
					<p className="pb-3">
						In this example, we have state being changed by a dropdown component
						in the first column. We want to keep state for which dropdown is
						open and increment the count for each item in a row.
					</p>
					<p className="pb-3">
						First up is <code>getColumns()</code> which is going to return an
						array of objects that control what gets rendered in each column on
						our table. Each column object will have two properties.
					</p>
					<p className="pb-3">
						First, we have a <code>label</code> property, which is the string
						for the column head.{" "}
					</p>
					<p className="pb-3">
						Second is an optional <code>render</code> property, which is a
						function that will render the column’s cell content for that row. If
						a render function does not exist for that cell, by default it will
						render the data as a string.
					</p>
					<p className="pb-3">Let’s look at the Status column first.</p>
					<CodeBlock>{CustomExampleCodeColumn2}</CodeBlock>
					<p className="pb-3">
						In this case, we are using the render function to apply some
						Tailwind classes to style the text in the cell.
					</p>
					<p className="pb-3">Next, let’s look at the Vehicle column.</p>
					<CodeBlock>{CustomExampleCodeColumn3}</CodeBlock>
					<p className="pb-3">
						This time, our render function is accepting props that it is using
						to render a more complex table cell layout. This is how our data
						looks for one of these rows:
					</p>
					<CodeBlock>{CustomExampleRowData}</CodeBlock>
					<p className="pb-3">
						Last, let’s look at the top <code>getColumns()</code> and the first
						column which has a dropdown component with a button to increase the
						number in the count column.
					</p>
					<CodeBlock>{CustomExampleCodeColumn1}</CodeBlock>
					<p className="pb-3">
						Here we are passing some props to manage the state of which row’s
						dropdown element is active and a method to increment the count value
						for each row. To see how this works, let’s next look at how we are
						using <strong>CardTable</strong> for this.
					</p>
					<CodeBlock>{CustomExampleCode}</CodeBlock>
					<p>
						Here we see that we are defining{" "}
						<code>activeItem, onToggleDropdown, onAddToCount</code> in a parent
						component, then use <code>getColumns()</code> to generate the
						columns array and pass to <strong>CardTable</strong> via its{" "}
						<code>columns</code> prop.
					</p>
					<h3 className="block pt-12 text-xl font-bold">Custom Card Example</h3>
					<div className="my-12 w-full max-w-5xl rounded md:border overflow-x-scroll">
						<div className="md:w-1200">
							<CustomCardExample />
						</div>
					</div>
					<p className="pb-3">
						In this example, we will use a custom function for rendering the
						cells in each table row. By default, <strong>CardTable</strong> will
						use its own internal <code>renderRows()</code> function. Instead of
						using the default, we can create our own and pass it in as a prop.
					</p>
					<CodeBlock>{RenderRowsCode}</CodeBlock>
					<p className="pb-3">
						Using Tailwind utility classes for grid styles, breakpoints,
						accessibility, alignment and more, we can create a highly customized
						card layout for smaller screen devices while keeping the table
						layout for larger screens.
					</p>
				</section>
			</main>

			<footer className="flex items-center justify-center w-full h-24 border-t">
				<p>
					Built by{" "}
					<a
						className="text-blue-600 bold underline"
						href="https://johnpolacek.com"
					>
						John Polacek
					</a>{" "}
					in Chicago
				</p>
			</footer>
		</div>
	)
}
