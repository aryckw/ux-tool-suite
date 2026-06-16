import React from 'react'
import { Box, VStack, Text, Badge, HStack } from '@chakra-ui/react'
import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import type { Task, Status, User } from '../types'
import { TaskCard } from './TaskCard'

interface Props {
  columnId: Status
  label: string
  tasks: Task[]
  users: User[]
  onTaskClick: (task: Task) => void
}

export function KanbanColumn({ columnId, label, tasks, users, onTaskClick }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id: columnId })

  return (
    <Box
      minW="280px"
      w="280px"
      bg={isOver ? 'blue.subtle' : 'bg.subtle'}
      borderRadius="lg"
      p={3}
      flexShrink={0}
      transition="background 0.15s"
    >
      <HStack mb={3} justify="space-between">
        <Text fontWeight="semibold" fontSize="sm" color="fg">
          {label}
        </Text>
        <Badge size="sm" variant="subtle" colorPalette="gray">{tasks.length}</Badge>
      </HStack>

      <Box ref={setNodeRef} minH="120px">
        <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              assignee={users.find(u => u.id === task.assigneeId)}
              onClick={() => onTaskClick(task)}
              isDone={columnId === 'done'}
            />
          ))}
        </SortableContext>
        {tasks.length === 0 && (
          <Box
            h="80px"
            borderRadius="md"
            border="2px dashed"
            borderColor="border.muted"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="xs" color="fg.subtle">Drop tasks here</Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}
