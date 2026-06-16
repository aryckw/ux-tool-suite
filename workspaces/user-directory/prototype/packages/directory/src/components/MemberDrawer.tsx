import React, { useState } from 'react'
import {
  Drawer,
  Button,
  Badge,
  Text,
  VStack,
  HStack,
  Box,
  Separator,
  Tabs,
  Checkbox,
} from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import type { Member, Role } from '../types'

const ROLE_COLORS: Record<Role, string> = {
  Admin: 'blue',
  Manager: 'purple',
  Member: 'gray',
  Viewer: 'yellow',
}

interface MemberDrawerProps {
  member: Member | null
  open: boolean
  onClose: () => void
}

export function MemberDrawer({ member, open, onClose }: MemberDrawerProps) {
  const [currentRole, setCurrentRole] = useState<Role>(member?.role ?? 'Member')
  const [canEdit, setCanEdit] = useState(false)
  const [canInvite, setCanInvite] = useState(false)
  const [canAdmin, setCanAdmin] = useState(false)

  if (!member) return null

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(e) => !e.open && onClose()}
      placement="end"
      size="md"
    >
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          {/* Header */}
          <Drawer.Header borderBottomWidth="1px">
            <Drawer.Title fontSize="md" fontWeight="semibold">
              {member.name}
            </Drawer.Title>
            <Drawer.CloseTrigger asChild>
              <Button size="sm" variant="ghost" position="absolute" right={3} top={3}>
                ✕
              </Button>
            </Drawer.CloseTrigger>
          </Drawer.Header>

          <Drawer.Body py={0} px={0} overflowY="auto">
            {/* Member Hero */}
            <VStack gap={3} align="center" py={8} px={6} borderBottomWidth="1px" borderColor="border">
              <Avatar.Root size="2xl" style={{ backgroundColor: member.avatarColor }}>
                <Avatar.Fallback fontSize="2xl">{member.initials}</Avatar.Fallback>
              </Avatar.Root>
              <Box textAlign="center">
                <Text fontWeight="semibold" fontSize="xl" mb={2}>
                  {member.name}
                </Text>
                <HStack gap={2} justify="center">
                  <Badge colorPalette={ROLE_COLORS[member.role]} variant="subtle" size="md">
                    {member.role}
                  </Badge>
                  <Badge
                    colorPalette={member.status === 'active' ? 'green' : 'gray'}
                    variant={member.status === 'active' ? 'solid' : 'subtle'}
                    size="md"
                  >
                    {member.status}
                  </Badge>
                </HStack>
              </Box>
            </VStack>

            {/* Contact Info */}
            <VStack gap={3} align="stretch" px={6} py={5} borderBottomWidth="1px" borderColor="border">
              <HStack gap={3}>
                <Text fontSize="xs" color="fg.muted" w="80px" flexShrink={0}>
                  Email
                </Text>
                <Text fontSize="sm">{member.email}</Text>
              </HStack>
              <HStack gap={3}>
                <Text fontSize="xs" color="fg.muted" w="80px" flexShrink={0}>
                  Department
                </Text>
                <Text fontSize="sm">{member.department}</Text>
              </HStack>
              <HStack gap={3}>
                <Text fontSize="xs" color="fg.muted" w="80px" flexShrink={0}>
                  Joined
                </Text>
                <Text fontSize="sm">{member.joinedAt}</Text>
              </HStack>
              <HStack gap={3}>
                <Text fontSize="xs" color="fg.muted" w="80px" flexShrink={0}>
                  Activity
                </Text>
                <Text fontSize="sm">{member.lastActive}</Text>
              </HStack>
            </VStack>

            {/* Tabs */}
            <Tabs.Root defaultValue="overview" variant="line">
              <Box borderBottomWidth="1px" borderColor="border" px={4}>
                <Tabs.List gap={0}>
                  <Tabs.Trigger value="overview" px={4} py={3} fontSize="sm">
                    Overview
                  </Tabs.Trigger>
                  <Tabs.Trigger value="projects" px={4} py={3} fontSize="sm">
                    Projects
                  </Tabs.Trigger>
                  <Tabs.Trigger value="permissions" px={4} py={3} fontSize="sm">
                    Permissions
                  </Tabs.Trigger>
                </Tabs.List>
              </Box>

              {/* Overview Tab */}
              <Tabs.Content value="overview" px={6} py={5}>
                <VStack gap={5} align="stretch">
                  <Box>
                    <Text fontSize="xs" fontWeight="semibold" color="fg.muted" textTransform="uppercase" letterSpacing="wider" mb={2}>
                      Bio
                    </Text>
                    <Text fontSize="sm" color="fg.subtle" lineHeight="tall">
                      {member.bio}
                    </Text>
                  </Box>

                  <Separator />

                  <Box>
                    <Text fontSize="xs" fontWeight="semibold" color="fg.muted" textTransform="uppercase" letterSpacing="wider" mb={2}>
                      Change Role
                    </Text>
                    <select
                      value={currentRole}
                      onChange={(e) => setCurrentRole(e.target.value as Role)}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: '1px solid var(--chakra-colors-border)',
                        background: 'var(--chakra-colors-bg)',
                        color: 'var(--chakra-colors-fg)',
                        fontSize: '14px',
                      }}
                    >
                      <option value="Admin">Admin</option>
                      <option value="Manager">Manager</option>
                      <option value="Member">Member</option>
                      <option value="Viewer">Viewer</option>
                    </select>
                  </Box>

                  <Button
                    variant="outline"
                    colorPalette="red"
                    size="sm"
                    w="full"
                  >
                    Deactivate Account
                  </Button>
                </VStack>
              </Tabs.Content>

              {/* Projects Tab */}
              <Tabs.Content value="projects" px={6} py={5}>
                <Text
                  fontSize="xs"
                  fontWeight="semibold"
                  color="fg.muted"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  mb={3}
                >
                  Active Projects
                </Text>
                <HStack gap={2} flexWrap="wrap">
                  {member.projects.map((project) => (
                    <Badge
                      key={project}
                      variant="outline"
                      colorPalette="blue"
                      size="md"
                      px={3}
                      py={1}
                    >
                      {project}
                    </Badge>
                  ))}
                </HStack>
              </Tabs.Content>

              {/* Permissions Tab */}
              <Tabs.Content value="permissions" px={6} py={5}>
                <Text
                  fontSize="xs"
                  fontWeight="semibold"
                  color="fg.muted"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  mb={4}
                >
                  Permissions
                </Text>
                <VStack gap={4} align="stretch">
                  <Checkbox.Root
                    checked={true}
                    onCheckedChange={() => {}}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Label>
                      <Box>
                        <Text fontSize="sm" fontWeight="medium">Can view</Text>
                        <Text fontSize="xs" color="fg.muted">View all content and members</Text>
                      </Box>
                    </Checkbox.Label>
                  </Checkbox.Root>

                  <Checkbox.Root
                    checked={canEdit}
                    onCheckedChange={(e) => setCanEdit(!!e.checked)}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Label>
                      <Box>
                        <Text fontSize="sm" fontWeight="medium">Can edit</Text>
                        <Text fontSize="xs" color="fg.muted">Edit projects and settings</Text>
                      </Box>
                    </Checkbox.Label>
                  </Checkbox.Root>

                  <Checkbox.Root
                    checked={canInvite}
                    onCheckedChange={(e) => setCanInvite(!!e.checked)}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Label>
                      <Box>
                        <Text fontSize="sm" fontWeight="medium">Can invite</Text>
                        <Text fontSize="xs" color="fg.muted">Invite new team members</Text>
                      </Box>
                    </Checkbox.Label>
                  </Checkbox.Root>

                  <Checkbox.Root
                    checked={canAdmin}
                    onCheckedChange={(e) => setCanAdmin(!!e.checked)}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Label>
                      <Box>
                        <Text fontSize="sm" fontWeight="medium">Admin access</Text>
                        <Text fontSize="xs" color="fg.muted">Manage members and billing</Text>
                      </Box>
                    </Checkbox.Label>
                  </Checkbox.Root>
                </VStack>
              </Tabs.Content>
            </Tabs.Root>
          </Drawer.Body>

          <Drawer.Footer borderTopWidth="1px">
            <Button variant="ghost" size="sm" onClick={onClose}>
              Close
            </Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  )
}
