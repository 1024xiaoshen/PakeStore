// components/MarkdownRenderer.js
import ReactMarkdown from 'react-markdown'

export default function MarkdownRenderer({
    content,
}: {
    content: string
}): React.ReactNode {
    return (
        <div className="leading-relaxed space-y-4">
            <ReactMarkdown
                components={{
                    p: ({ children }) => <p className="mb-4">{children}</p>,
                    ul: ({ children }) => (
                        <ul className="list-disc pl-5 mb-4">{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="list-decimal pl-5 mb-4">{children}</ol>
                    ),
                    li: ({ children }) => <li className="mb-2">{children}</li>,
                    h1: ({ children }) => (
                        <h1 className="text-2xl font-bold mb-4">{children}</h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-xl font-bold mb-4">{children}</h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-lg font-bold mb-4">{children}</h3>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}
