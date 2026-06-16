import type { Task, User, Project } from '../types'

export const mockUsers: User[] = [
  { id: 'u1', name: 'Jordan Davis', initials: 'JD', color: '#3B82F6' },
  { id: 'u2', name: 'Alex Morgan', initials: 'AM', color: '#8B5CF6' },
  { id: 'u3', name: 'Sam Rivera', initials: 'SR', color: '#10B981' },
]

export const mockProjects: Project[] = [
  { id: 'p1', name: 'Team Alpha', color: '#3B82F6' },
  { id: 'p2', name: 'Platform', color: '#8B5CF6' },
]

export const mockTasks: Task[] = [
  { id: 't1', title: 'Fix login bug', description: 'Users are being logged out unexpectedly after 5 minutes. Check token refresh logic.', status: 'todo', priority: 'critical', assigneeId: 'u1', projectId: 'p1', labels: ['bug', 'auth'], dueDate: '2026-06-18', createdAt: '2026-06-10T09:00:00Z' },
  { id: 't2', title: 'Update API docs', description: 'Document all new v2 endpoints in Swagger. Include request/response examples.', status: 'todo', priority: 'low', assigneeId: 'u2', projectId: 'p2', labels: ['docs'], dueDate: '2026-06-30', createdAt: '2026-06-10T10:00:00Z' },
  { id: 't3', title: 'API rate limiting', description: 'Implement rate limiting middleware. 100 req/min per API key. Return 429 with Retry-After header.', status: 'todo', priority: 'high', assigneeId: 'u1', projectId: 'p2', labels: ['backend', 'security'], dueDate: '2026-06-20', createdAt: '2026-06-11T08:00:00Z' },
  { id: 't4', title: 'Dashboard redesign', description: 'Redesign the main analytics dashboard per new mockups. Use Chakra UI v3 components throughout.', status: 'in-progress', priority: 'medium', assigneeId: 'u3', projectId: 'p1', labels: ['design', 'frontend'], dueDate: '2026-06-22', createdAt: '2026-06-09T14:00:00Z' },
  { id: 't5', title: 'Auth refactor', description: 'Migrate from JWT to OAuth 2.0 + PKCE. Update all auth-related endpoints.', status: 'in-progress', priority: 'high', assigneeId: 'u2', projectId: 'p2', labels: ['backend', 'auth'], dueDate: '2026-06-19', createdAt: '2026-06-08T11:00:00Z' },
  { id: 't6', title: 'Mobile layout', description: 'Fix responsive breakpoints for the dashboard. Test on iOS Safari and Android Chrome.', status: 'review', priority: 'medium', assigneeId: 'u3', projectId: 'p1', labels: ['frontend', 'mobile'], dueDate: '2026-06-17', createdAt: '2026-06-07T09:00:00Z' },
  { id: 't7', title: 'Setup CI/CD', description: 'GitHub Actions pipeline: lint, test, build, deploy to staging on PR merge.', status: 'done', priority: 'medium', assigneeId: 'u1', projectId: 'p2', labels: ['devops'], dueDate: '2026-06-10', createdAt: '2026-06-01T10:00:00Z' },
  { id: 't8', title: 'Write unit tests', description: 'Achieve 80% coverage for the API layer. Focus on auth and payment modules.', status: 'done', priority: 'low', assigneeId: 'u2', projectId: 'p2', labels: ['testing'], dueDate: '2026-06-12', createdAt: '2026-06-02T10:00:00Z' },
]
