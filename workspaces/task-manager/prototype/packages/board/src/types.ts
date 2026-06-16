export type Priority = 'critical' | 'high' | 'medium' | 'low'
export type Status = 'todo' | 'in-progress' | 'review' | 'done'

export interface User {
  id: string
  name: string
  initials: string
  color: string
}

export interface Task {
  id: string
  title: string
  description: string
  status: Status
  priority: Priority
  assigneeId: string
  projectId: string
  labels: string[]
  dueDate: string
  createdAt: string
}

export interface Project {
  id: string
  name: string
  color: string
}

export const COLUMNS: { id: Status; label: string }[] = [
  { id: 'todo', label: 'To Do' },
  { id: 'in-progress', label: 'In Progress' },
  { id: 'review', label: 'Review' },
  { id: 'done', label: 'Done' },
]
