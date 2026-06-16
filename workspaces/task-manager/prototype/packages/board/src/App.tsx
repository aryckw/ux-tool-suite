import React, { useState, useCallback } from 'react'
import {
  Box, HStack, VStack, Text, Button, Tabs, Badge, Spinner, Center, Alert
} from '@chakra-ui/react'
import {
  DndContext, DragEndEvent, PointerSensor, useSensor, useSensors, closestCorners, DragOverlay
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import type { Task, Status } from './types'
import { COLUMNS } from './types'
import { mockTasks, mockUsers } from './data/mock-data'
import { KanbanColumn } from './components/KanbanColumn'
import { TaskDetailDrawer } from './components/TaskDetailDrawer'
import { CreateTaskDialog } from './components/CreateTaskDialog'
import { TaskCard } from './components/TaskCard'
import { UserAvatar } from './components/UserAvatar'

type ViewState = 'success' | 'loading' | 'empty' | 'error'

let nextId = 100

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [filterAssignee, setFilterAssignee] = useState('')
  const [activeId, setActiveId] = useState<string | null>(null)
  const [viewState, setViewState] = useState<ViewState>('success')

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }))

  const filteredTasks = tasks.filter(t => !filterAssignee || t.assigneeId === filterAssignee)

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event
    setActiveId(null)
    if (!over) return

    const activeTask = tasks.find(t => t.id === active.id)
    if (!activeTask) return

    const overId = over.id as string
    const targetStatus = COLUMNS.find(c => c.id === overId)?.id as Status | undefined
    const targetTask = tasks.find(t => t.id === overId)

    if (targetStatus) {
      setTasks(prev => prev.map(t => t.id === active.id ? { ...t, status: targetStatus } : t))
    } else if (targetTask && targetTask.status !== activeTask.status) {
      setTasks(prev => prev.map(t => t.id === active.id ? { ...t, status: targetTask.status } : t))
    } else if (targetTask) {
      setTasks(prev => {
        const oldIndex = prev.findIndex(t => t.id === active.id)
        const newIndex = prev.findIndex(t => t.id === overId)
        return arrayMove(prev, oldIndex, newIndex)
      })
    }
  }, [tasks])

  const handleStatusChange = (taskId: string, status: Status) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status } : t))
    if (selectedTask?.id === taskId) setSelectedTask(prev => prev ? { ...prev, status } : null)
  }

  const handleCreateTask = (partial: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = { ...partial, id: `t${++nextId}`, createdAt: new Date().toISOString() }
    setTasks(prev => [newTask, ...prev])
  }

  const activeTask = activeId ? tasks.find(t => t.id === activeId) : null
  const overdueCount = tasks.filter(t => t.status !== 'done' && t.dueDate < new Date().toISOString().slice(0, 10)).length

  return (
    <Box minH="100vh" bg="bg" fontFamily="Inter, system-ui, sans-serif">
      {/* Top bar */}
      <Box bg="bg" borderBottomWidth="1px" borderColor="border" px={6} py={3} position="sticky" top={0} zIndex={10}>
        <HStack justify="space-between">
          <HStack gap={3}>
            <Text fontWeight="bold" fontSize="lg" color="blue.500">TaskFlow</Text>
            <Badge variant="subtle" colorPalette="blue">Team Alpha</Badge>
          </HStack>
          <HStack gap={2}>
            <UserAvatar user={mockUsers[0]} size="sm" />
            <Button size="sm" colorPalette="blue" onClick={() => setDialogOpen(true)}>+ New Task</Button>
          </HStack>
        </HStack>
      </Box>

      {/* State switcher (smoke test helper) */}
      <Box bg="bg.subtle" borderBottomWidth="1px" borderColor="border" px={6} py={1}>
        <HStack gap={2} fontSize="xs">
          <Text color="fg.muted">Preview state:</Text>
          {(['success', 'loading', 'empty', 'error'] as ViewState[]).map(s => (
            <Button key={s} size="xs" variant={viewState === s ? 'solid' : 'outline'}
              colorPalette={viewState === s ? 'blue' : 'gray'} onClick={() => setViewState(s)}>
              {s}
            </Button>
          ))}
          <Text color="fg.muted" ml={4}>Filter:</Text>
          <Button size="xs" variant={!filterAssignee ? 'solid' : 'outline'} colorPalette={!filterAssignee ? 'blue' : 'gray'} onClick={() => setFilterAssignee('')}>All</Button>
          {mockUsers.map(u => (
            <Button key={u.id} size="xs" variant={filterAssignee === u.id ? 'solid' : 'outline'} colorPalette={filterAssignee === u.id ? 'blue' : 'gray'} onClick={() => setFilterAssignee(u.id)}>
              {u.initials}
            </Button>
          ))}
        </HStack>
      </Box>

      {/* Overdue alert */}
      {overdueCount > 0 && viewState === 'success' && (
        <Alert.Root status="error" variant="subtle" px={6} py={2}>
          <Alert.Indicator />
          <Alert.Description fontSize="sm">
            {overdueCount} task{overdueCount > 1 ? 's are' : ' is'} overdue and need{overdueCount === 1 ? 's' : ''} attention.
          </Alert.Description>
        </Alert.Root>
      )}

      {/* Main content */}
      {viewState === 'loading' && (
        <Center h="60vh"><VStack gap={3}><Spinner size="xl" color="blue.500" /><Text color="fg.muted">Loading tasks...</Text></VStack></Center>
      )}
      {viewState === 'error' && (
        <Center h="60vh">
          <VStack gap={4} p={8} bg="red.subtle" borderRadius="xl" maxW="sm" textAlign="center">
            <Text fontSize="2xl">!</Text>
            <Text fontWeight="semibold" color="red.fg">Failed to load tasks</Text>
            <Text fontSize="sm" color="fg.muted">Check your connection and try again.</Text>
            <Button size="sm" colorPalette="red" onClick={() => setViewState('success')}>Retry</Button>
          </VStack>
        </Center>
      )}
      {viewState === 'empty' && (
        <Center h="60vh">
          <VStack gap={4} textAlign="center">
            <Text fontSize="3xl">[ ]</Text>
            <Text fontWeight="semibold">No tasks yet</Text>
            <Text fontSize="sm" color="fg.muted">Create your first task to get started.</Text>
            <Button size="sm" colorPalette="blue" onClick={() => setDialogOpen(true)}>+ New Task</Button>
          </VStack>
        </Center>
      )}
      {viewState === 'success' && (
        <Box px={6} py={4} overflowX="auto">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={e => setActiveId(e.active.id as string)}
            onDragEnd={handleDragEnd}
            onDragCancel={() => setActiveId(null)}
          >
            <HStack gap={4} align="flex-start" minW="max-content">
              {COLUMNS.map(col => (
                <KanbanColumn
                  key={col.id}
                  columnId={col.id}
                  label={col.label}
                  tasks={filteredTasks.filter(t => t.status === col.id)}
                  users={mockUsers}
                  onTaskClick={task => { setSelectedTask(task); setDrawerOpen(true) }}
                />
              ))}
            </HStack>
            <DragOverlay>
              {activeTask && (
                <TaskCard
                  task={activeTask}
                  assignee={mockUsers.find(u => u.id === activeTask.assigneeId)}
                  onClick={() => {}}
                  isDone={activeTask.status === 'done'}
                />
              )}
            </DragOverlay>
          </DndContext>
        </Box>
      )}

      {/* Overlays */}
      <TaskDetailDrawer
        task={selectedTask}
        users={mockUsers}
        open={drawerOpen}
        onClose={() => { setDrawerOpen(false); setSelectedTask(null) }}
        onStatusChange={handleStatusChange}
      />
      <CreateTaskDialog
        users={mockUsers}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSubmit={handleCreateTask}
      />
    </Box>
  )
}
