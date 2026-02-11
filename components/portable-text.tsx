import { PortableText as BasePortableText, PortableTextComponents } from '@portabletext/react'

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-4 mt-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-3 mt-5">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold mb-2 mt-4">{children}</h4>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-muted-foreground">{children}</li>,
    number: ({ children }) => <li className="text-muted-foreground">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a 
        href={value?.href} 
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="text-primary hover:underline"
      >
        {children}
      </a>
    ),
  },
}

interface PortableTextProps {
  value: any
}

export function PortableText({ value }: PortableTextProps) {
  return <BasePortableText value={value} components={components} />
}
