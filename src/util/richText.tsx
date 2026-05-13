import type { ReactNode } from 'react'

/** Renders `**bold**` segments as <strong>. */
export function richText(text: string): ReactNode {
  const segments = text.split(/(\*\*[^*]+\*\*)/g)
  return segments.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}
