import Highlight, { defaultProps } from "prism-react-renderer"
import github from "prism-react-renderer/themes/github"

const CodeBlock = ({ children, className }) => {
	const language = className ? className.replace(/language-/, "") : "javascript"
	return (
		<Highlight
			{...defaultProps}
			code={children}
			language={language}
			theme={github}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={className}
					style={{
						textAlign: "left",
						padding: "16px 16px 0",
						marginBottom: "32px",
						overflow: "scroll",
						...style,
					}}
				>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	)
}

export default CodeBlock
