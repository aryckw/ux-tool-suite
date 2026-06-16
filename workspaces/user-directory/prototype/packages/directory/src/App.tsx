import React, { useState, useMemo } from 'react'
import {
  Box,
  HStack,
  VStack,
  Text,
  Badge,
  Input,
  Button,
  Spinner,
  Center,
  Alert,
} from '@chakra-ui/react'
import { mockMembers } from './data/mock-members'
import { MemberCard } from './components/MemberCard'
import { MemberDrawer } from './components/MemberDrawer'
import { InviteDialog } from './components/InviteDialog'
import type { Member } from './types'

type ViewState = 'loading' | 'error' | 'populated'

export default function App() {
  const [search, setSearch] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const [deptFilter, setDeptFilter] = useState('')
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [viewState, setViewState] = useState<ViewState>('populated')

  const filtered = useMemo(() => {
    return mockMembers.filter((m) => {
      const matchSearch =
        !search ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.email.toLowerCase().includes(search.toLowerCase())
      const matchRole = !roleFilter || m.role === roleFilter
      const matchDept = !deptFilter || m.department === deptFilter
      return matchSearch && matchRole && matchDept
    })
  }, [search, roleFilter, deptFilter])

  const hasFilters = search || roleFilter || deptFilter

  return (
    <Box minH="100vh" bg="bg" fontFamily="Inter, system-ui, sans-serif">
      {/* Top Bar */}
      <Box
        bg="bg"
        borderBottomWidth="1px"
        borderColor="border"
        px={6}
        py={3}
        position="sticky"
        top={0}
        zIndex={10}
      >
        <HStack justify="space-between">
          <HStack gap={3}>
            <Text fontWeight="bold" fontSize="lg">
              Team Directory
            </Text>
            <Badge colorPalette="blue" variant="subtle">
              {filtered.length} members
            </Badge>
          </HStack>
          <HStack gap={2}>
            {/* View state switcher for demo */}
            <HStack gap={1}>
              {(['populated', 'loading', 'error'] as ViewState[]).map((s) => (
                <Button
                  key={s}
                  size="xs"
                  variant={viewState === s ? 'solid' : 'outline'}
                  colorPalette={viewState === s ? 'blue' : 'gray'}
                  onClick={() => setViewState(s)}
                >
                  {s}
                </Button>
              ))}
            </HStack>
            <Button
              size="sm"
              colorPalette="blue"
              onClick={() => setDialogOpen(true)}
            >
              + Invite Member
            </Button>
          </HStack>
        </HStack>
      </Box>

      {/* Search + Filters */}
      <Box
        bg="bg.subtle"
        borderBottomWidth="1px"
        borderColor="border"
        px={6}
        py={3}
        position="sticky"
        top="64px"
        zIndex={9}
      >
        <HStack gap={3} flexWrap="wrap">
          <Input
            placeholder="Search members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            maxW="280px"
            size="sm"
            variant="outline"
          />
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            style={{
              padding: '4px 10px',
              borderRadius: '6px',
              border: '1px solid var(--chakra-colors-border)',
              background: 'var(--chakra-colors-bg)',
              color: 'var(--chakra-colors-fg)',
              fontSize: '14px',
            }}
          >
            <option value="">All Roles</option>
            {['Admin', 'Manager', 'Member', 'Viewer'].map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <select
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            style={{
              padding: '4px 10px',
              borderRadius: '6px',
              border: '1px solid var(--chakra-colors-border)',
              background: 'var(--chakra-colors-bg)',
              color: 'var(--chakra-colors-fg)',
              fontSize: '14px',
            }}
          >
            <option value="">All Departments</option>
            {['Engineering', 'Design', 'Product', 'Marketing'].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          {hasFilters && (
            <Button
              size="xs"
              variant="ghost"
              onClick={() => {
                setSearch('')
                setRoleFilter('')
                setDeptFilter('')
              }}
            >
              Clear filters
            </Button>
          )}
          <Text ml="auto" fontSize="xs" color="fg.muted">
            {filtered.length} of {mockMembers.length} members
          </Text>
        </HStack>
      </Box>

      {/* Content */}
      {viewState === 'loading' && (
        <Center h="60vh">
          <VStack gap={3}>
            <Spinner size="xl" color="blue.500" />
            <Text color="fg.muted">Loading directory...</Text>
          </VStack>
        </Center>
      )}

      {viewState === 'error' && (
        <Center h="60vh" p={8}>
          <Alert.Root
            status="error"
            variant="subtle"
            borderRadius="xl"
            maxW="sm"
          >
            <Alert.Indicator />
            <Alert.Description>
              Failed to load team members. Please try again.
            </Alert.Description>
          </Alert.Root>
        </Center>
      )}

      {viewState === 'populated' && (
        <Box px={6} py={6}>
          {filtered.length === 0 ? (
            <Center h="40vh">
              <VStack gap={3} textAlign="center">
                <Text fontSize="3xl">&#128269;</Text>
                <Text fontWeight="semibold">No members found</Text>
                <Text fontSize="sm" color="fg.muted">
                  Try adjusting your search or filters.
                </Text>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setSearch('')
                    setRoleFilter('')
                    setDeptFilter('')
                  }}
                >
                  Clear filters
                </Button>
              </VStack>
            </Center>
          ) : (
            <Box
              display="grid"
              gridTemplateColumns="repeat(3, 1fr)"
              gap={4}
            >
              {filtered.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  onClick={() => {
                    setSelectedMember(member)
                    setDrawerOpen(true)
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      )}

      <MemberDrawer
        member={selectedMember}
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false)
          setSelectedMember(null)
        }}
      />
      <InviteDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </Box>
  )
}
