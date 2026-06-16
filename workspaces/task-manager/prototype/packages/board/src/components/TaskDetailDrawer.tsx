import React from 'react'
import {
  Drawer, Button, Badge, Text, VStack, HStack, Box, Input, Separator
} from '@chakra-ui/react'
import type { Task, User } from '../types'
import { PriorityBadge } from './PriorityBadge'
import { UserAvatar } from './UserAvatar'

interface Props {
  task: Task | null
  users: User[]
  open: boolean
  onClose: () => void
  onStatusChange: (taskId: string, status: Task['status']) => void
}

const STATUS_OPTIONS: Task['status'][] = ['todo', 'in-progress', 'review', 'done']
const STATUS_LABELS: Record<Task['status'], string> = {
  'todo': 'To Do',
  'in-progress': 'In Progress',
  'review': 'Review',
  'done': 'Done',
}

export function TaskDetailDrawer({ task, users, open, onClose, onStatusChange }: Props) {
  if (!task) return null
  const assignee = users.find(u => u.id === task.assigneeId)

  return (
    <Drawer.Root open={open} onOpenChange={e => !e.open && onClose()} placement="end" size="md">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header borderBottomWidth="1px">
            <Drawer.Title fontSize="md" fontWeight="semibold" noOfLines={1}>{task.title}</Drawer.Title>
            <Drawer.CloseTrigger asChild>
              <Button size="sm" variant="ghost" position="absolute" right={3} top={3}>✕</Button>
            </Drawer.CloseTrigger>
          </Drawer.Header>

          <Drawer.Body py={4}>
            <VStack align="stretch" gap={4}>
              {/* Status + Priority */}
              <HStack gap={3} flexWrap="wrap">
                <Box>
                  <Text fontSize="xs" color="fg.muted" mb={1}>Status</Text>
                  <HStack gap={1} flexWrap="wrap">
                    {STATUS_OPTIONS.map(s => (
                      <Button
                        key={s}
                        size="xs"
                        variant={task.status === s ? 'solid' : 'outline'}
                        colorPalette={task.status === s ? 'blue' : 'gray'}
                        onClick={() => onStatusChange(task.id, s)}
                      >
                        {STATUS_LABELS[s]}
                      </Button>
                    ))}
                  </HStack>
                </Box>
                <Box>
                  <Text fontSize="xs" color="fg.muted" mb={1}>Priority</Text>
                  <PriorityBadge priority={task.priority} />
                </Box>
              </HStack>

              <Separator />

              {/* Meta */}
              <HStack gap={6}>
                <Box>
                  <Text fontSize="xs" color="fg.muted" mb={1}>Assignee</Text>
                  {assignee
                    ? <HStack gap={2}><UserAvatar user={assignee} size="sm" /><Text fontSize="sm">{assignee.name}</Text></HStack>
                    : <Text fontSize="sm" color="fg.muted">Unassigned</Text>
                  }
                </Box>
                <Box>
                  <Text fontSize="xs" color="fg.muted" mb={1}>Due Date</Text>
                  <Text fontSize="sm">{task.dueDate}</Text>
                </Box>
              </HStack>

              {/* Labels */}
              {task.labels.length > 0 && (
                <Box>
                  <Text fontSize="xs" color="fg.muted" mb={2}>Labels</Text>
                  <HStack gap={1} flexWrap="wrap">
                    {task.labels.map(l => (
                      <Badge key={l} size="sm" variant="outline" colorPalette="gray">{l}</Badge>
                    ))}
                  </HStack>
                </Box>
              )}

              <Separator />

              {/* Description */}
              <Box>
                <Text fontSize="xs" color="fg.muted" mb={2}>Description</Text>
                <Text fontSize="sm" color="fg.subtle" lineHeight="tall">{task.description}</Text>
              </Box>

              <Separator />

              {/* Comments placeholder */}
              <Box>
                <Text fontSize="xs" color="fg.muted" mb={2}>Comments</Text>
                <Box bg="bg.subtle" borderRadius="md" p={3} mb={3}>
                  <Text fontSize="xs" color="fg.subtle">No comments yet. Be the first to comment.</Text>
                </Box>
                <Input placeholder="Add a comment..." size="sm" variant="outline" />
              </Box>
            </VStack>
          </Drawer.Body>

          <Drawer.Footer borderTopWidth="1px">
            <Button variant="ghost" size="sm" onClick={onClose}>Close</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  )
}
