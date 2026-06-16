import React from 'react'
import { Box, Card, Text, HStack, Badge } from '@chakra-ui/react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { Task } from '../types'
import type { User } from '../types'
import { PriorityBadge } from './PriorityBadge'
import { UserAvatar } from './UserAvatar'

interface Props {
  task: Task
  assignee: User | undefined
  onClick: () => void
  isDone: boolean
}

export function TaskCard({ task, assignee, onClick, isDone }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  }

  const isOverdue = !isDone && task.dueDate < new Date().toISOString().slice(0, 10)

  return (
    <Box ref={setNodeRef} style={style} {...attributes} {...listeners} mb={2}>
      <Card.Root
        size="sm"
        variant="elevated"
        cursor="grab"
        _hover={{ shadow: 'md', transform: 'translateY(-1px)' }}
        transition="all 0.15s"
        opacity={isDone ? 0.6 : 1}
        onClick={onClick}
      >
        <Card.Body p={3}>
          <Text fontWeight="medium" fontSize="sm" mb={2} color={isDone ? 'fg.muted' : 'fg'} noOfLines={2}>
            {task.title}
          </Text>
          <HStack justify="space-between" align="center">
            <PriorityBadge priority={task.priority} />
            <HStack gap={1}>
              {isOverdue && (
                <Badge size="sm" variant="solid" colorPalette="red">Overdue</Badge>
              )}
              <Text fontSize="xs" color="fg.muted">{task.dueDate}</Text>
              {assignee && <UserAvatar user={assignee} size="xs" />}
            </HStack>
          </HStack>
          {task.labels.length > 0 && (
            <HStack mt={2} gap={1} flexWrap="wrap">
              {task.labels.map(l => (
                <Badge key={l} size="xs" variant="outline" colorPalette="gray">{l}</Badge>
              ))}
            </HStack>
          )}
        </Card.Body>
      </Card.Root>
    </Box>
  )
}
