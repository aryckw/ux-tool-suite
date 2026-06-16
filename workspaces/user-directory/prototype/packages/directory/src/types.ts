export type Role = 'Admin' | 'Manager' | 'Member' | 'Viewer'
export type Status = 'active' | 'inactive'
export type Department = 'Engineering' | 'Design' | 'Product' | 'Marketing'

export interface Member {
  id: string
  name: string
  email: string
  role: Role
  department: Department
  status: Status
  avatarColor: string
  initials: string
  joinedAt: string
  lastActive: string
  bio: string
  projects: string[]
}
