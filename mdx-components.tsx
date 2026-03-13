import type { MDXComponents } from 'mdx/types'
import React from 'react'

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    h1: ({ children, ...props }: React.ComponentPropsWithoutRef<'h1'>) => (
      <h1
        id={typeof children === 'string' ? children.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') : undefined}
        className="text-3xl md:text-4xl font-bold text-white mt-12 mb-6"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: React.ComponentPropsWithoutRef<'h2'>) => (
      <h2
        id={typeof children === 'string' ? children.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') : undefined}
        className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: React.ComponentPropsWithoutRef<'h3'>) => (
      <h3
        id={typeof children === 'string' ? children.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') : undefined}
        className="text-xl md:text-2xl font-semibold text-white mt-8 mb-3"
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }: React.ComponentPropsWithoutRef<'h4'>) => (
      <h4 className="text-lg md:text-xl font-semibold text-white mt-6 mb-2" {...props}>
        {children}
      </h4>
    ),
    p: ({ children, ...props }: React.ComponentPropsWithoutRef<'p'>) => (
      <p className="text-white/70 leading-relaxed mb-4" {...props}>
        {children}
      </p>
    ),
    a: ({ children, href, ...props }: React.ComponentPropsWithoutRef<'a'>) => (
      <a
        href={href}
        className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    ),
    ul: ({ children, ...props }: React.ComponentPropsWithoutRef<'ul'>) => (
      <ul className="list-disc list-inside space-y-2 text-white/70 mb-4 ml-4" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: React.ComponentPropsWithoutRef<'ol'>) => (
      <ol className="list-decimal list-inside space-y-2 text-white/70 mb-4 ml-4" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: React.ComponentPropsWithoutRef<'li'>) => (
      <li className="text-white/70 leading-relaxed" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }: React.ComponentPropsWithoutRef<'blockquote'>) => (
      <blockquote
        className="border-l-4 border-blue-500/50 pl-4 py-2 my-6 text-white/60 italic bg-white/5 rounded-r-lg"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ children, className, ...props }: React.ComponentPropsWithoutRef<'code'>) => {
      // If it has a className, it's a code block (handled by pre)
      if (className) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
      // Inline code
      return (
        <code
          className="bg-white/10 text-blue-300 px-1.5 py-0.5 rounded text-sm font-mono"
          {...props}
        >
          {children}
        </code>
      )
    },
    pre: ({ children, ...props }: React.ComponentPropsWithoutRef<'pre'>) => (
      <pre
        className="bg-white/5 border border-white/10 rounded-xl p-4 overflow-x-auto mb-6 text-sm"
        {...props}
      >
        {children}
      </pre>
    ),
    hr: (props: React.ComponentPropsWithoutRef<'hr'>) => <hr className="border-white/10 my-8" {...props} />,
    strong: ({ children, ...props }: React.ComponentPropsWithoutRef<'strong'>) => (
      <strong className="text-white font-semibold" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }: React.ComponentPropsWithoutRef<'em'>) => (
      <em className="text-white/80" {...props}>
        {children}
      </em>
    ),
    table: ({ children, ...props }: React.ComponentPropsWithoutRef<'table'>) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-white/10" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }: React.ComponentPropsWithoutRef<'th'>) => (
      <th className="border border-white/10 bg-white/5 px-4 py-2 text-left text-white font-semibold" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }: React.ComponentPropsWithoutRef<'td'>) => (
      <td className="border border-white/10 px-4 py-2 text-white/70" {...props}>
        {children}
      </td>
    ),
    img: ({ src, alt, ...props }: React.ComponentPropsWithoutRef<'img'>) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt || ''}
        className="rounded-lg my-6 max-w-full h-auto"
        loading="lazy"
        {...props}
      />
    ),
    ...components,
  }
}
