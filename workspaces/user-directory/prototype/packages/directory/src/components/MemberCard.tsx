import React from 'react'
import { Box, Card, Text, Badge, HStack, VStack } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import type { Member, Role } from '../types'

const ROLE_COLORS: Record<Role, string> = {
  Admin: 'blue',
  Manager: 'purple',
  Member: 'gray',
  Viewer: 'yellow',
}

interface MemberCardProps {
  member: Member
  onClick: () => void
}

export function MemberCard({ member, onClick }: MemberCardProps) {
  return (
    <Card.Root
      variant="elevated"
      cursor="pointer"
      _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
      transition="all 0.15s"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick()
      }}
      aria-label={`View ${member.name}'s profile`}
    >
      <Card.Body p={5}>
        <VStack gap={2} align="center" textAlign="center">
          <Avatar.Root
            size="lg"
            style={{ backgroundColor: member.avatarColor }}
            opacity={member.status === 'inactive' ? 0.5 : 1}
          >
            <Avatar.Fallback>{member.initials}</Avatar.Fallback>
          </Avatar.Root>
          <Box>
            <Text
              fontWeight="semibold"
              fontSize="sm"
              color={member.status === 'inactive' ? 'fg.muted' : 'fg'}
            >
              {member.name}
            </Text>
            <Text fontSize="xs" color="fg.muted">
              {member.email}
            </Text>
          </Box>
          <HStack gap={1} flexWrap="wrap" justify="center">
            <Badge
              size="sm"
              variant="subtle"
              colorPalette={ROLE_COLORS[member.role]}
            >
              {member.role}
            </Badge>
            <Badge
              size="sm"
              variant={member.status === 'active' ? 'solid' : 'subtle'}
              colorPalette={member.status === 'active' ? 'green' : 'gray'}
            >
              {member.status}
            </Badge>
          </HStack>
          <Text fontSize="xs" color="fg.subtle">
            {member.department}
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
