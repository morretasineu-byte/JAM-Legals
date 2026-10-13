import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface LegalContentProps {
  content: string;
}

export const LegalContent: React.FC<LegalContentProps> = ({ content }) => {
  return (
    <article className="max-w-[720px] mx-auto text-[#1C1917] font-sans">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="font-cinzel text-3xl sm:text-4xl text-[#1C1917] font-semibold tracking-wide mt-2 mb-6 pb-4 border-b border-[#E7E2D8]">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-cinzel text-xl sm:text-2xl text-[#1C1917] font-semibold mt-12 mb-4 tracking-wide">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-cinzel text-base sm:text-lg text-[#1C1917] font-medium mt-8 mb-3 tracking-wide">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-base text-[#1C1917] leading-[1.8] my-4">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-5 my-4 space-y-2 text-[#1C1917] leading-[1.75] marker:text-[#8C3A18]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 my-4 space-y-2 text-[#1C1917] leading-[1.75] marker:text-[#8C3A18] marker:font-medium">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-[#1C1917] leading-[1.75]">
              {children}
            </li>
          ),
          hr: () => (
            <hr className="my-10 border-0 border-t border-[#E7E2D8]" />
          ),
          a: ({ href, children }) => {
            if (href?.startsWith('/')) {
              return (
                <Link
                  to={href}
                  className="text-[#8C3A18] underline underline-offset-2 hover:text-[#1C1917] transition-colors focus-visible:outline-2 focus-visible:outline-[#8C3A18] rounded-xs"
                >
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={href}
                className="text-[#8C3A18] underline underline-offset-2 hover:text-[#1C1917] transition-colors focus-visible:outline-2 focus-visible:outline-[#8C3A18] rounded-xs"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {children}
              </a>
            );
          },
          strong: ({ children }) => (
            <strong className="font-semibold text-[#1C1917]">
              {children}
            </strong>
          ),
          code: ({ children }) => (
            <code className="text-xs bg-[#EFECE6] px-1.5 py-0.5 rounded-xs text-[#1C1917] font-mono">
              {children}
            </code>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-[#8C3A18] pl-4 italic text-[#57534E] my-4 bg-[#F8F7F4] py-2 pr-3">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6 border border-[#E7E2D8] rounded-xs bg-[#FBFBF9] shadow-xs">
              <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[#F8F7F4] border-b border-[#E7E2D8]">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-[#E7E2D8]">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-[#F8F7F4]/50 transition-colors">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-xs font-semibold text-[#1C1917] border-r last:border-r-0 border-[#E7E2D8]">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-sm text-[#1C1917] border-r last:border-r-0 border-[#E7E2D8] align-top">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};
