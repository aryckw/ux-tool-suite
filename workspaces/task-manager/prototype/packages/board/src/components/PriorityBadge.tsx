import React from 'react'
import { Badge } from '@chakra-ui/react'
import type { Priority } from '../types'

const CONFIG: Record<Priority, { label: string; colorPalette: string }> = {
  critical: { label: 'Critical', colorPalette: 'red' },
  high: { label: 'High', colorPalette: 'orange' },
  medium: { label: 'Medium', colorPalette: 'yellow' },
  low: { label: 'Low', colorPalette: 'green' },
}

export function PriorityBadge({ priority }: { priority: Priority }) {
  const { label, colorPalette } = CONFIG[priority]
  return (
    <Badge size="sm" variant="subtle" colorPalette={colorPalette}>
      {label}
    </Badge>
  )
}
