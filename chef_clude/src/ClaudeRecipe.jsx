import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe({ recipe }) {
    return (
        <section className="suggested-recipe-section">
            <h2 className="suggested-recipe-title">Chef Claude Recommends:</h2>
            <article 
                className="suggested-recipe-container" 
                aria-live="polite"
            >
                <ReactMarkdown 
                    components={{
                        h2: ({node, ...props}) => <h2 className="text-xl font-bold mb-4" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-lg font-semibold text-[#D17557] mb-3" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4" {...props} />,
                        li: ({node, ...props}) => <li className="mb-2" {...props} />,
                        strong: ({node, ...props}) => <strong className="block mt-3 mb-2 text-base" {...props} />
                    }}
                >
                    {recipe}
                </ReactMarkdown>
            </article>
        </section>
    )
}