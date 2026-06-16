export interface UserProfile {
  id: string
  name: string
  email: string
  bio: string
  timezone: string
  language: string
  initials: string
  color: string
}

export interface NotificationPrefs {
  taskAssigned: boolean
  taskDue: boolean
  mentions: boolean
  comments: boolean
  productUpdates: boolean
  securityAlerts: boolean
  emailDigest: boolean
}

export const mockProfile: UserProfile = {
  id: 'u1',
  name: 'Jordan Davis',
  email: 'jordan@company.com',
  bio: 'Product designer at Team Alpha. Coffee enthusiast.',
  timezone: 'America/Los_Angeles',
  language: 'en',
  initials: 'JD',
  color: '#3B82F6',
}

export const mockNotifPrefs: NotificationPrefs = {
  taskAssigned: true,
  taskDue: true,
  mentions: true,
  comments: false,
  productUpdates: true,
  securityAlerts: true,
  emailDigest: false,
}

export const mockSessions = [
  {
    id: 's1',
    browser: 'Chrome 125',
    os: 'macOS Sonoma',
    location: 'San Francisco, CA',
    lastActive: '2 minutes ago',
    current: true,
  },
  {
    id: 's2',
    browser: 'Safari 17',
    os: 'iPhone 15 Pro',
    location: 'New York, NY',
    lastActive: '3 days ago',
    current: false,
  },
]
