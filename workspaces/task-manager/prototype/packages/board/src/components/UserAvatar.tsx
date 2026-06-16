import React from 'react'
import { Avatar } from '@chakra-ui/react'
import type { User } from '../types'

export function UserAvatar({ user, size = 'xs' }: { user: User; size?: 'xs' | 'sm' | 'md' }) {
  return (
    <Avatar.Root size={size} title={user.name} style={{ backgroundColor: user.color, cursor: 'default' }}>
      <Avatar.Fallback>{user.initials}</Avatar.Fallback>
    </Avatar.Root>
  )
}
