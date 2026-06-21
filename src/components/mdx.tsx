import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    h2: ({ children, ...props }) => (
      <h2
        className="mt-12 text-2xl font-semibold tracking-[-0.03em] text-foreground first:mt-0"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="mt-9 text-xl font-medium text-foreground" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p
        className="mt-5 text-[15px] leading-7 text-muted-foreground"
        {...props}
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul
        className="mt-5 list-disc space-y-2 pl-5 text-[15px] text-muted-foreground"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="mt-5 list-decimal space-y-2 pl-5 text-[15px] text-muted-foreground"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-7" {...props}>
        {children}
      </li>
    ),
    a: ({ children, ...props }) => (
      <a
        className="text-foreground underline decoration-[color:var(--ember)]/50 underline-offset-4 transition-colors hover:text-[color:var(--ember)]"
        {...props}
      >
        {children}
      </a>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="mt-6 border-l border-[color:var(--ember)] pl-5 text-muted-foreground"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ children, className, ...props }) => {
      const inline = typeof children === "string";

      return (
        <code
          className={
            inline
              ? `rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[13px] text-foreground ${className ?? ""}`
              : className
          }
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: ({ children, className, ...props }) => (
      <pre
        className={`mt-6 overflow-x-auto rounded-lg border border-border bg-surface/70 p-4 text-[13px] leading-6 ${className ?? ""}`}
        {...props}
      >
        {children}
      </pre>
    ),
    hr: (props) => <hr className="my-10 border-border" {...props} />,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;
